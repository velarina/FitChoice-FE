import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const CustomButtonGreen = (props) => {
  return (
    <View>
      <TouchableOpacity style={style.Button} onPress={props.onPress}>
        <Text
          style={{
            color: "#FDFAF6",
            fontWeight: "bold",
            textAlign: "center",
            alignSelf: "center",
            fontSize: 16,
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButtonGreen;

const style = StyleSheet.create({
  Button: {
    borderRadius: 100,
    marginHorizontal: 32,
    alignItems: "center",
    padding: 16,
    backgroundColor: "#47663B",
  },
});
