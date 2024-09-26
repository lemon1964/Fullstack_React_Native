import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  tab: {
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

const AppBarTab = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.tab}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default AppBarTab;
