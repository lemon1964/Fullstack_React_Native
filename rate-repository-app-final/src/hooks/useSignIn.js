import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(SIGN_IN, {
    onError: error => {
      console.log(error);
    },
  });

  const signIn = async ({ username, password }) => {
    const result = await mutate({ variables: { username, password } });
    const accessToken = result.data?.authenticate.accessToken;
    if (accessToken) {
      await authStorage.setAccessToken(accessToken);
      await apolloClient.resetStore();
    }

    return result;
  };

  return [signIn, result];
};

export default useSignIn;
