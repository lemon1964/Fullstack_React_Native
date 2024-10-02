import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({
  orderBy = "CREATED_AT",
  orderDirection = "ASC",
  searchKeyword = "",
  first = 5,
  ...variables
} = {}) => {
  const { data, loading, error, refetch, fetchMore } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection, searchKeyword, first },
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("GraphQL error:", error);
  }

  const repositories = data?.repositories;

  return { repositories, loading, refetch, fetchMore: handleFetchMore };
};

export default useRepositories;
