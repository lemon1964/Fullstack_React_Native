import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "white",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
});

const ImageItem = ({ props }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
    </View>
  );
};

export default ImageItem;
