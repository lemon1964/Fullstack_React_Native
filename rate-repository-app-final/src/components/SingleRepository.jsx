import { FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";
import { Text, View, StyleSheet } from "react-native";
import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ItemDetails/ReviewItem";

const styles = StyleSheet.create({
  separator: {
    backgroundColor: "#e1e4e8",
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
  const { id } = useParams();

  const { data, loading, error, fetchMore } = useQuery(GET_REPOSITORY, {
    variables: { id, first: 4 },
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        first: 4,
        id,
      },
    }).catch(e => {
      console.error("Error fetching more reviews: ", e);
    });
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!data || !data.repository) {
    return <Text>No repository found</Text>;
  }

  const repository = data.repository;
  const reviews = repository.reviews.edges.map(edge => edge.node).reverse();

  const onEndReach = () => {
    if (fetchMore) {
      handleFetchMore();
    }
  };

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} myReview={false} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem repository={repository} showGitHubButton={true} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;
