import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  ImageBackground,
  FlatList,
  ScrollView,
} from "react-native";

import IconButton from "../components/iconButton";
import axiosInstance from "../libs/axios";

const productDetail = ({ navigation }) => {
  const route = useRoute();
  const id = route.params?.id;
  const [products, setProducts] = useState();

  useEffect(() => {
    axiosInstance
      .get(`product/id/${id}`)
      .then((res) => {
        setProducts(res.data.products);
        console.log(products);
        console.log(res.data);
      })
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background3.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.header}>
          <IconButton
            icon={require("../assets/arrow_back.png")}
            onPress={() => navigation.navigate("home")}
          />
        </View>

        <ScrollView style={styles.contentContainer}>
          <View style={styles.productImageContainer}>
            <Image
              style={styles.productImage}
              source={{
                uri: products.image_url,
              }}
            />
          </View>
          <Text style={styles.ProductName}></Text>
          <Text style={styles.ProductBrand}>{products.productsName}</Text>
          <Text style={styles.NutrientIngredient}>Ingredient</Text>
          <View style={styles.ProductContainer}>
            <Text style={styles.ProductText}>{products.ingredients}</Text>
          </View>
          <Text style={styles.NutrientIngredient}>Nutrient</Text>
          <View style={styles.ProductContainer}>
            <Text style={styles.ProductText}>{products.nutrients}</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0", // Add a background color for the container
  },
  header: {
    paddingTop: 24,
    paddingBottom: 12,
    paddingHorizontal: 24,
  },
  backgroundImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  ProductName: {
    fontSize: 24,
    margin: 6,
    fontWeight: "bold",
  },
  ProductBrand: {
    margin: 6,
    fontSize: 20,
    fontWeight: "bold",
  },
  ProductContainer: {
    backgroundColor: "#F5F7EE",
    padding: 24,
    margin: 6,
    borderRadius: 20,
  },
  NutrientIngredient: {
    margin: 6,
    fontSize: 16,
  },
  ProductText: {
    fontSize: 16,
  },
  productImageContainer: {
    alignItems: "center",
    height: 200,
  },
  productImage: {
    height: 180,
    width: 180,
  },
});

export default productDetail;
