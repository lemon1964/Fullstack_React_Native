import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { NativeRouter } from "react-router-native";
import { BrowserRouter } from "react-router-dom";
import Main from "./src/components/Main";

const App = () => {
  const Router = Platform.OS === "web" ? BrowserRouter : NativeRouter;

  return (
    <>
      <Router>
        <Main />
      </Router>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
