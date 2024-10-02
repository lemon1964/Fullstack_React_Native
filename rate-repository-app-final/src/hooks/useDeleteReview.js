import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
  const [deleteReview] = useMutation(DELETE_REVIEW, {
    refetchQueries: ["Me"],
  });
  return [deleteReview];
};

export default useDeleteReview;
