import { View, StyleSheet } from "react-native";
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "space-between",
    flexShrink: 1,
    alignItems: "center",
  },
  text: {
    marginBottom: 5,
    fontSize: 12,
  },
  textprops: {
    marginBottom: 5,
    fontSize: 14,
  },
});

const DigitsItem = ({ props, text }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize="subheading" style={styles.textprops}>
        {props}
      </Text>
      <Text color="textSecondary" style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

export default DigitsItem;
