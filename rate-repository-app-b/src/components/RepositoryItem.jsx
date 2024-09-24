import { View, StyleSheet } from "react-native";
import ImageItem from "./ItemDetails/ImageItem";
import InfoItem from "./ItemDetails/InfoItem";
import DigitsItem from "./ItemDetails/DigitsItem";

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: "white",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    marginRight: 15,
  },
});

const formatNumber = number => {
  if (number >= 1000) {
    const formattedNumber = (number / 1000).toFixed(1);
    return formattedNumber.endsWith(".0") ? Math.round(number / 1000) + "k" : formattedNumber + "k";
  }
  return number;
};

const RepositoryItem = ({ props }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ImageItem props={props} />
        <InfoItem props={props} />
      </View>
      <View style={styles.bottomContainer}>
        <DigitsItem props={formatNumber(props.stargazersCount)} text="Stars" />
        <DigitsItem props={formatNumber(props.forksCount)} text="Forks" />
        <DigitsItem props={formatNumber(props.reviewCount)} text="Reviews" />
        <DigitsItem props={formatNumber(props.ratingAverage)} text="Rating" />
      </View>
    </View>
  );
};

export default RepositoryItem;
