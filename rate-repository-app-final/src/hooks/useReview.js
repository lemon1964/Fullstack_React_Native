import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW, {
    onError: error => {
      console.log("Error during mutation:", error);
    },
  });

  const createReview = async ({ ownerName, repositoryName, text, rating }) => {
    const result = await mutate({
      variables: {
        ownerName,
        repositoryName,
        text,
        rating,
      },
    });
    return result;
  };

  return [createReview, result];
};

export default useReview;
