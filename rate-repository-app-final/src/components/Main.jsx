import { StyleSheet, View, Platform } from "react-native";
import { Routes, Route, Navigate } from "react-router-native";
import { Routes as BrowserRoutes, Route as BrowserRoute } from "react-router-dom";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import theme from "../theme";
import SignIn from "./SignIn";
import SingleRepository from "./SingleRepository";
import ReviewForm from "./ReviewForm";
import SignUpForm from "./SignUpForm";
import UserReviews from "./UserReviews";

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
          <BrowserRoute path="/:id" element={<SingleRepository />} />
          <BrowserRoute path="/review" element={<ReviewForm />} />
          <BrowserRoute path="/user-reviews" element={<UserReviews />} />
          <BrowserRoute path="/signup" element={<SignUpForm />} />
          <BrowserRoute path="*" element={<Navigate to="/" replace />} />
        </BrowserRoutes>
      ) : (
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/:id" element={<SingleRepository />} />
          <Route path="/review" element={<ReviewForm />} />
          <Route path="/user-reviews" element={<UserReviews />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </View>
  );
};

export default Main;
