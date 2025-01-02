import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProductCard = (props) => {
  let cardStyle;
  console.log(props);
  switch (props.approval) {
    case "High":
      cardStyle = styles.cardHigh;
      break;
    case "Medium":
      cardStyle = styles.cardMedium;
      break;
    case "Low":
      cardStyle = styles.cardLow;
      break;
    default:
      cardStyle = styles.card;
      break;
  }

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={(styles.card, cardStyle)}>
        <Image
          source={{
            uri: props.image_url,
          }}
          style={styles.image}
        />
        <View style={styles.Textcontainer}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.brand}>{props.brand}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardHigh: {
    backgroundColor: "#EA324C",
    width: 116,
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  cardMedium: {
    backgroundColor: "#F2AC42",
    width: 116,
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  cardLow: {
    backgroundColor: "#00B38A",
    width: 116,
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  cardDefault: {
    backgroundColor: "#FFFFFF",
    width: 116,
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  card: {
    width: 116,
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
    padding: 4,
    borderRadius: 16,
  },
  Textcontainer: {
    borderRadius: 10,
    width: 100,
    margin: 6,
    backgroundColor: "#FFFFFF",
  },
  name: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 6,
    color: "#000000",
  },
  brand: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
    marginBottom: 6,
    color: "#000000",
  },
});

export default ProductCard;
