import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SignIn($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUp($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      id
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview(
    $ownerName: String!
    $repositoryName: String!
    $rating: Int!
    $text: String!
  ) {
    createReview(
      review: {
        ownerName: $ownerName
        repositoryName: $repositoryName
        text: $text
        rating: $rating
      }
    ) {
      repositoryId
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation DeleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`;
