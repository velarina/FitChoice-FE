import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

const DropdownComponent = ({ value, onChange }) => {
  const [isFocus, setIsFocus] = React.useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "#FDFAF6" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select Gender" : "..."}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          onChange(item.value); // Call the parent's onChange function
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },
  focusedDropdown: {
    borderColor: "#FDFAF6", // Border color when focused
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#333", // Placeholder text color
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#333", // Selected text color
  },
});
