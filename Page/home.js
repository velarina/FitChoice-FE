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
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../libs/axios";

const HomePage = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");

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
      setProducts(initialProducts);
    } else {
      const filtered = initialProducts.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setProducts(filtered);
    }
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const savedUsername = await AsyncStorage.getItem("username");
        console.log("Fetched username:", savedUsername);
        setUsername(savedUsername || "Guest");
      } catch (error) {
        console.error("Failed to fetch username:", error.message);
        setUsername("Guest");
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello, {username}!</Text>
        <SearchBar onSearch={() => {}} />
      </View>
      <ImageBackground
        source={require("../assets/background2.png")}
        style={styles.backgroundImage}
      >
        <FlatList
          data={products}
          numColumns={3}
          renderItem={({ item }) => (
            <ProductCard
              image_url={item.productsImage}
              name={item.productsName}
              brand={item.productsBrand}
              approval={item.approval}
              onPress={() =>
                navigation.navigate("productDetail", { id: item.productsID })
              }
            />
          )}
          keyExtractor={(item) => item.productsID.toString()}
        />
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
