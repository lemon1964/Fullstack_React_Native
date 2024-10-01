import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import * as Linking from "expo-linking";
import ImageItem from "./ItemDetails/ImageItem";
import InfoItem from "./ItemDetails/InfoItem";
import DigitsItem from "./ItemDetails/DigitsItem";

const styles = StyleSheet.create({
  container: {
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
    // flexWrap: "wrap", // Позволяет переносить элементы на новую строку
  },
  button: {
    backgroundColor: "#0366d6",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

const formatNumber = number => {
  if (number >= 1000) {
    const formattedNumber = (number / 1000).toFixed(1);
    return formattedNumber.endsWith(".0") ? Math.round(number / 1000) + "k" : formattedNumber + "k";
  }
  return number;
};

const RepositoryItem = ({ repository, showGitHubButton }) => {
  if (!repository) {
    return <Text>No repository data</Text>;
  }

  const navigate = useNavigate();

  const handlePress = () => {
    navigate(`/${repository.id}`);
  };

  return (
    <Pressable onPress={handlePress}>
      <View testID="repositoryItem" style={styles.container}>
        <View style={styles.topContainer}>
          <ImageItem props={repository} />
          <InfoItem props={repository} />
        </View>
        <View style={styles.bottomContainer}>
          <DigitsItem props={formatNumber(repository.stargazersCount)} text="Stars" />
          <DigitsItem props={formatNumber(repository.forksCount)} text="Forks" />
          <DigitsItem props={formatNumber(repository.reviewCount)} text="Reviews" />
          <DigitsItem props={formatNumber(repository.ratingAverage)} text="Rating" />
        </View>
        {showGitHubButton && (
          <View>
            <Pressable style={styles.button} onPress={() => Linking.openURL(repository.url)}>
              <Text style={styles.buttonText}>Open in GitHub</Text>
            </Pressable>
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default RepositoryItem;
