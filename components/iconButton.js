import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const IconButton = (props) => {
  return (
    <TouchableOpacity style={style.iconButton} onPress={props.onPress}>
      <Image style={style.iconStyle} source={props.icon} />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  iconButton: {
    flexWrap: "wrap",
    alignItems: "center",
    width: 64,
    height: 64,
  },
  iconStyle: {
    width: 56,
    height: 56,
  },
});

export default IconButton;
