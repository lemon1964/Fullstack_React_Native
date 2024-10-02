import { View, Text, StyleSheet, Pressable, Alert, Platform } from "react-native";
import format from "date-fns/format";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../../hooks/useDeleteReview";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e4e8",
  },
  ratingContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#0366d6",
    marginRight: 15,
    marginLeft: 5,
  },
  ratingText: {
    color: "#0366d6",
    fontWeight: "bold",
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
  },
  usernameText: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  dateText: {
    color: "#586069",
    marginBottom: 5,
  },
  reviewText: {
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonView: {
    backgroundColor: "#0366d6",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginRight: 5,
    marginLeft: 5,
  },
  buttonDelete: {
    backgroundColor: "#d73a4a",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginRight: 5,
    marginLeft: 5,
  },
  buttonText: {
    color: "white",
  },
});

const ReviewItem = ({ review, myReview }) => {
  const navigate = useNavigate();
  const formattedDate = format(new Date(review.createdAt), "dd.MM.yyyy");

  const user = myReview ? review.repositoryId : review.user.username;

  const handlePressRepository = () => {
    navigate(`/${review.repositoryId}`);
  };

  const [deleteReview] = useDeleteReview();

  const handlePressDelete = () => {
    if (Platform.OS === "web") {
      const confirmDelete = window.confirm("Are you sure you want to delete this review?");
      if (confirmDelete) {
        deleteReview({ variables: { deleteReviewId: review.id } })
          .then(() => {
            console.log("Review deleted successfully.");
          })
          .catch(e => {
            console.error(e);
          });
      }
    } else {
      Alert.alert("Delete Review", "Are you sure you want to delete this review?", [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: async () => {
            try {
              await deleteReview({ variables: { deleteReviewId: review.id } });
            } catch (e) {
              console.error(e);
            }
          },
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.usernameText}>{user}</Text>
          <Text style={styles.dateText}>{formattedDate}</Text>
          <Text style={styles.reviewText}>{review.text}</Text>
        </View>
      </View>
      {myReview && (
        <View style={styles.buttonContainer}>
          <Pressable style={styles.buttonView} onPress={handlePressRepository}>
            <Text style={styles.buttonText}>View repository</Text>
          </Pressable>
          <Pressable style={styles.buttonDelete} onPress={handlePressDelete}>
            <Text style={styles.buttonText}>Delete review</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
