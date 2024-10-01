import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ME } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import ReviewItem from "./ItemDetails/ReviewItem";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  separator: {
    height: 10,
    backgroundColor: "#e1e4e8",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviews = () => {
  const { data, loading, error } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
    variables: { includeReviews: true },
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!data || !data.me) {
    return <Text>No user found</Text>;
  }

  if (!data.me.reviews || !data.me.reviews.edges) {
    return <Text>No reviews found</Text>;
  }

  const reviews = data.me.reviews.edges.map(edge => edge.node);

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} myReview={true} />}
      keyExtractor={({ id }) => id}
    />
  );
};

export default UserReviews;
