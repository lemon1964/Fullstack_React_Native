import { StyleSheet, View, Platform } from "react-native";
import { Routes, Route, Navigate } from "react-router-native";
import { Routes as BrowserRoutes, Route as BrowserRoute } from "react-router-dom";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import theme from "../theme";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
  text: {
    fontFamily: Platform.select({
      ios: theme.fonts.ios,
      android: theme.fonts.android,
      default: theme.fonts.default,
    }),
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      {Platform.OS === "web" ? (
        <BrowserRoutes>
          <BrowserRoute path="/" element={<RepositoryList />} />
          <BrowserRoute path="/signin" element={<SignIn />} />
          <BrowserRoute path="*" element={<Navigate to="/" replace />} />
        </BrowserRoutes>
      ) : (
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </View>
  );
};

export default Main;
