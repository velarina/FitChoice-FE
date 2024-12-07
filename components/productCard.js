import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductCard = ({ product }) => {
  return (
    <View style={styles.productCard}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productBrand}>{product.brand}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
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

export default ProductCard;
