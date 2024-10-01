import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { useDebounce } from "use-debounce";

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "white",
  },
  searchbar: {
    marginBottom: 10,
  },
});

const FilterRepositoryList = ({ setSelectedFilter }) => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedValue] = useDebounce(searchValue, 500);

  useEffect(() => {
    setSelectedFilter(debouncedValue);
  }, [debouncedValue, setSelectedFilter]);

  const onChangeSearch = value => {
    setSearchValue(value);
  };

  const onPressFilter = () => {
    setSelectedFilter(debouncedValue);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchValue}
        style={styles.searchbar}
        onIconPress={onPressFilter}
        icon="filter"
        clearIcon="close"
        iconColor="black"
        placeholderTextColor="black"
      />
    </View>
  );
};

export default FilterRepositoryList;
