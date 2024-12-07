import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
//import React, { useState } from "react";

const CustomTextInputDate = ({ text, onValueChange, placeholder }) => {
  const onChangeText = (date) => {
    onChangeText(date);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onValueChange}
        value={text}
        placeholder={placeholder}
      />
    </View>
  );
};

export default CustomTextInputDate;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    color: "#333",
  },
});
