import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNavigate } from "react-router-native";
import { ScrollView } from "react-native";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

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
});

const AppBar = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title="Repositories" onPress={() => navigate("/")} />
        <AppBarTab title="Sign In" onPress={() => navigate("/signin")} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
