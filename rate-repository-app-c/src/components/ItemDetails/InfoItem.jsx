import { View, StyleSheet } from "react-native";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 15,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: "white",
    padding: 5,
    borderRadius: 4,
    overflow: "hidden",
    marginTop: 5,
  },
  text: {
    marginBottom: 5,
  },
});

const InfoItem = ({ props }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize="subheading" style={styles.text}>
        {props.fullName}
      </Text>
      <Text color="textSecondary" style={styles.text}>
        {props.description}
      </Text>
      <Text style={styles.language}>{props.language}</Text>
    </View>
  );
};

export default InfoItem;
