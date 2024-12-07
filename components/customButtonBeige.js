import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const CustomButton = (props) => {
  return (
    <View>
      <TouchableOpacity style={style.Button} onPress={props.onPress}>
        <Text
          style={{
            color: "#47663B",
            fontWeight: "bold",
            textAlign: "center",
            alignSelf: "center",
            paddingVertical: 16,
            paddingHorizontal: 32,
            fontSize: 16,
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const style = StyleSheet.create({
  Button: {
    marginTop: 12,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#47663B",
    marginHorizontal: 32,
    backgroundColor: "#E8ECD7",
  },
  text: {
    alignSelf: "center",
  },
});
