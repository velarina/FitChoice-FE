import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ImageBackground,
  navigateToScreen,
} from "react-native";
import ProductCard from "../components/productCard";
import productDetail from "./productDetail";

const productRecomendation = () => {
  const initialProducts = [
    {
      id: 1,
      name: "Almond Milk",
      approval: "Low",
      brand: "NutriAlmond",
      image: require("../assets/milk.png"),
    },
    {
      id: 2,
      name: "Citato",
      approval: "Medium",
      brand: "gofood",
      image: require("../assets/chips.png"),
    },
    {
      id: 3,
      name: "soda",
      approval: "High",
      brand: "cocacola",
      image: require("../assets/soda.png"),
    },
  ];

  const [products, setProducts] = useState(initialProducts);

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
        <Text style={styles.headerText}>Your Recommendation!</Text>
        <Text style={styles.headerText2}>
          you might get shock to find new goods
        </Text>
      </View>
      <ImageBackground
        source={require("../assets/background3.png")}
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
                source={item.image}
                approval={item.approval}
                name={item.name}
                brand={item.brand}
                onPress={() => navigateToScreen(productDetail)}
              />
            )}
            keyExtractor={(item) => item.id.toString()} // Ensure the key is a string
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
    backgroundColor: "#FFFFFF", // Set a background color for the container
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
  headerText2: {
    fontSize: 16,
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

export default productRecomendation;
