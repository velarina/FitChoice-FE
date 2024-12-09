import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const CustomButtonLogOut = (props) => {
  return (
    <View>
      <TouchableOpacity style={style.Button} onPress={props.onPress}>
        <Text
          style={{
            color: "black",
            textAlign: "center",
            alignSelf: "center",
            fontSize: 12,
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButtonLogOut;

const style = StyleSheet.create({
  Button: {
    marginTop: 12,
    borderRadius: 100,
    borderWidth: 2,
    marginHorizontal: 32,
    backgroundColor: "#E8ECD7",
  },
  text: {
    alignSelf: "center",
  },
});
