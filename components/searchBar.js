import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.searchBarContainer}>
      <FontAwesomeIcon icon={faSearch} style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 24,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginHorizontal: 2,
    borderWidth: 2,
    marginBottom: 12,
    borderColor: "#cccccc",
    fontSize: 16,
  },
  searchIcon: {
    marginRight: 12,
    marginLeft: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBar;
