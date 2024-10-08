import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { Platform } from "react-native";
import { NativeRouter } from "react-router-native";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Main from "./src/components/Main";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorageContext from "./src/contexts/AuthStorageContext";
import AuthStorage from "./src/utils/authStorage";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  console.log(Constants.expoConfig);

  const Router = Platform.OS === "web" ? BrowserRouter : NativeRouter;

  return (
    <>
      <Router>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </Router>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
