import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import SearchBar from "../components/searchBar";

const HomePage = () => {
  const initialProducts = [
    {
      id: 1,
      name: "Almond Milk",
      brand: "NutriAlmond",
      image: require("../assets/milk.png"),
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  const handleSearch = (searchText) => {
    if (searchText.trim() === "") {
      setFilteredProducts(initialProducts); // Reset to initial products if search is empty
    } else {
      const filtered = initialProducts.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello, Adam Smith!</Text>
        <SearchBar onSearch={handleSearch} />
      </View>
      <ImageBackground
        source={require("../assets/background2.png")}
        style={styles.backgroundImage}
      >
        {filteredProducts.length === 0 ? (
          <Text style={styles.noProductsText}>No products found</Text>
        ) : (
          <FlatList
            data={filteredProducts}
            numColumns={3}
            renderItem={({ item }) => (
              <View style={styles.productCard}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productBrand}>{item.brand}</Text>
              </View>
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
  productCard: {
    width: 116,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    margin: 5,
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productName: {
    fontWeight: "bold",
    marginTop: 5,
  },
  productBrand: {
    fontSize: 12,
    color: "gray",
  },
});

export default HomePage;
