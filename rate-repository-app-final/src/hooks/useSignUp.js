import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP, {
    onError: error => {
      console.log(error);
    },
  });

  const signUp = async ({ username, password }) => {
    const result = await mutate({ variables: { username, password } });
    const id = result.data?.createUser.id;
    if (id) {
      return result;
    }
    return null;
  };

  return [signUp, result];
};

export default useSignUp;
