import React from "react";
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

const userHealth = ({ navigation }) => {
  //   const [isChecked, setIsChecked] = useState(false);

  //   const handleOnChange = () => {
  //     setIsChecked(!isChecked);
  //   };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Adam Smith</Text>
      </View>
      <ImageBackground
        source={require("../assets/background2.png")}
        style={styles.backgroundImage}
      >
        <ScrollView style={styles.contentContainer}>
          <Text style={styles.ProductName}>Health Issue</Text>
          <View style={styles.ProductContainer}>
            <Text style={styles.ProductText}>agr</Text>
          </View>
        </ScrollView>
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
    textAlign: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    paddingTop: 20,
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

export default userHealth;
