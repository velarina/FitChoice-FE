import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ImageBackground,
  navigateToScreen,
} from "react-native";
import SearchBar from "../components/searchBar";
import ProductCard from "../components/productCard";
import axiosInstance from "../libs/axios";

const HomePage = ({ navigation }) => {
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    axiosInstance
      .get("product")
      .then((res) => {
        setProducts(res.data.products);
        console.log(products);
        console.log(res.data);
      })
      .catch((error) => console.error(error.message));
  }, []);

  const handleSearch = (searchText) => {
    if (searchText.trim() === "") {
      setProducts(initialProducts); // Reset to initial products if search is empty
    } else {
      const filtered = initialProducts.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setProducts(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello, There!</Text>
        <SearchBar onSearch={handleSearch} />
      </View>
      <ImageBackground
        source={require("../assets/background2.png")}
        style={styles.backgroundImage}
      >
        {products.length === 0 ? (
          <Text style={styles.noProductsText}>No products found</Text>
        ) : (
          <FlatList
            data={products}
            numColumns={3}
            renderItem={({ item }) => (
              <ProductCard
                image_url={item.productsImage}
                approval={item.approval}
                name={item.productsName}
                brand={item.productsBrand}
                onPress={() =>
                  navigation.navigate("productDetail", { id: item.id })
                }
              />
            )}
            keyExtractor={(item) => item.productsID}
            style={styles.productContainer}
            contentContainerStyle={{ paddingBottom: 80 }}
          />
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingTop: 64,
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 12,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    paddingTop: 20,
  },
  productContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  noProductsText: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
    color: "gray",
  },
});

export default HomePage;
