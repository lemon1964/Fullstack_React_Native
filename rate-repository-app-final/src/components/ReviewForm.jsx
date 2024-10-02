import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import useReview from "../hooks/useReview";
import { TextInput, Pressable, View, Text, StyleSheet } from "react-native";

const validationSchema = yup.object().shape({
  text: yup.string(),
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .typeError("Rating must be a number")
    .min(0, "Rating must be between 0 and 100")
    .max(100, "Rating must be between 0 and 100")
    .required("Rating is required"),
});

const initialValues = {
  text: "",
  ownerName: "",
  repositoryName: "",
  rating: "",
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  errorInput: {
    borderColor: "red",
    borderWidth: 1,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#0366d6",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});

const ReviewForm = () => {
  const navigate = useNavigate();
  const [review] = useReview();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const { ownerName, repositoryName, text, rating } = values;

      try {
        const result = await review({ ownerName, repositoryName, text, rating });
        const repositoryId = result.data?.createReview.repositoryId;

        if (repositoryId) {
          resetForm();
          navigate(`/${repositoryId}`, { replace: true });
        }
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          formik.errors.ownerName && formik.touched.ownerName && styles.errorInput,
        ]}
        placeholder="Repository owner name"
        value={formik.values.ownerName}
        onChangeText={formik.handleChange("ownerName")}
        onBlur={formik.handleBlur("ownerName")}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text style={styles.errorText}>{formik.errors.ownerName}</Text>
      )}
      <TextInput
        style={[
          styles.input,
          formik.errors.repositoryName && formik.touched.repositoryName && styles.errorInput,
        ]}
        placeholder="Repository name"
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange("repositoryName")}
        onBlur={formik.handleBlur("repositoryName")}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={styles.errorText}>{formik.errors.repositoryName}</Text>
      )}
      <TextInput
        style={[styles.input, formik.errors.rating && formik.touched.rating && styles.errorInput]}
        placeholder="Rating between 0 and 100"
        value={formik.values.rating.toString()}
        onChangeText={value => formik.setFieldValue("rating", value ? Number(value) : "")}
        onBlur={formik.handleBlur("rating")}
      />

      {formik.touched.rating && formik.errors.rating && (
        <Text style={styles.errorText}>{formik.errors.rating}</Text>
      )}
      <TextInput
        style={[styles.input, formik.errors.text && formik.touched.text && styles.errorInput]}
        placeholder="Review"
        value={formik.values.text}
        onChangeText={formik.handleChange("text")}
        onBlur={formik.handleBlur("text")}
        multiline={true}
      />
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Creat a review</Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
