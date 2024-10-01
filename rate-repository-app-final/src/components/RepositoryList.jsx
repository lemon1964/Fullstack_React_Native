import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const [selectedSort, setSelectedSort] = useState("latest");
  const [selectedFilter, setSelectedFilter] = useState("");

  const { repositories, loading, refetch, fetchMore } = useRepositories({
    first: 5,
    orderBy: selectedSort === "latest" ? "CREATED_AT" : "RATING_AVERAGE",
    orderDirection: selectedSort === "highest" ? "DESC" : "ASC",
    searchKeyword: selectedFilter,
  });

  useEffect(() => {
    if (refetch) {
      refetch();
    }
  }, [selectedSort, selectedFilter]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const onEndReach = () => {
    if (fetchMore) {
      fetchMore();
    }
  };

  return (
    <View style={styles.container}>
      <RepositoryListContainer
        repositories={repositories}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        ItemSeparator={ItemSeparator}
        onEndReach={onEndReach}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 10,
    backgroundColor: "#e1e4e8",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export default RepositoryList;
