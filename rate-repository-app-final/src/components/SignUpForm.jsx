import React from "react";
import { TextInput, Pressable, View, Text, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";

const validationSchema = yup.object({
  username: yup
    .string()
    .min(5, "Username must be at least 5 characters")
    .max(30, "Username must not exceed 30 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .max(50, "Password must not exceed 50 characters")
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required("Password confirm is required"),
});

const initialValues = {
  username: "",
  password: "",
  passwordConfirm: "",
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
    borderColor: "#d73a4a",
  },
  errorText: {
    color: "#d73a4a",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#0366d6",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

const SignUpForm = () => {
  const navigate = useNavigate();
  const [signUp, { loading, error }] = useSignUp();
  const [signIn] = useSignIn();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      const { username, password } = values;
      try {
        const result = await signUp({ username, password });
        const id = result.data?.createUser.id;
        if (id) {
          const { data } = await signIn({ username, password });
          if (data) {
            navigate("/", { replace: true });
          }
        }
      } catch (e) {
        console.log(e);
      }
    },
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          formik.errors.username && formik.touched.username && styles.errorInput,
        ]}
        placeholder="Username"
        onChangeText={formik.handleChange("username")}
        value={formik.values.username}
        onBlur={formik.handleBlur("username")}
      />
      {formik.touched.username && formik.errors.username ? (
        <Text style={styles.errorText}>{formik.errors.username}</Text>
      ) : null}

      <TextInput
        style={[
          styles.input,
          formik.errors.password && formik.touched.password && styles.errorInput,
        ]}
        placeholder="Password"
        secureTextEntry
        onChangeText={formik.handleChange("password")}
        value={formik.values.password}
        onBlur={formik.handleBlur("password")}
      />
      {formik.touched.password && formik.errors.password ? (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      ) : null}

      <TextInput
        style={[
          styles.input,
          formik.errors.passwordConfirm && formik.touched.passwordConfirm && styles.errorInput,
        ]}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={formik.handleChange("passwordConfirm")}
        value={formik.values.passwordConfirm}
        onBlur={formik.handleBlur("passwordConfirm")}
      />
      {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
        <Text style={styles.errorText}>{formik.errors.passwordConfirm}</Text>
      ) : null}

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;
