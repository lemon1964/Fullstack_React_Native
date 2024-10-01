import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNavigate } from "react-router-native";
import { ScrollView } from "react-native";
import { useApolloClient, useQuery } from "@apollo/client";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import useAuthStorage from "../hooks/useAuthStorage";
import { ME } from "../graphql/queries";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: "row",
    padding: 8,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    height: 80,
    paddingHorizontal: 10,
  },
  usernameText: {
    color: "white",
    paddingHorizontal: 10,
    alignSelf: "center",
  },
});

const AppBar = () => {
  const navigate = useNavigate();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const { data, loading, error } = useQuery(ME);

  if (loading) return null;
  if (error) {
    console.log(error);
    return null;
  }

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate("/signin", { replace: true });
  };

  const isLoggedIn = data?.me;

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title="Repositories" onPress={() => navigate("/")} />
        {isLoggedIn ? (
          <>
            <AppBarTab title="Create a review" onPress={() => navigate("/review")} />
            <AppBarTab title="My reviews" onPress={() => navigate("/user-reviews")} />
            <AppBarTab title="Sign Out" onPress={signOut} />
            <Text style={styles.usernameText}>{data.me.username}</Text>
          </>
        ) : (
          <>
            <AppBarTab title="Sign In" onPress={() => navigate("/signin")} />
            <AppBarTab title="Sign Up" onPress={() => navigate("/signup")} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
