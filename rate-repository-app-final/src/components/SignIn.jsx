import React from "react";
import { StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import useSignIn from "../hooks/useSignIn";
import { SignInContainer } from "./SignInContainer";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  username: "",
  password: "",
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

const SignIn = () => {
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const { username, password } = values;
      try {
        const { data } = await signIn({ username, password });
        if (data) {
          resetForm();
          navigate("/", { replace: true });
        }
      } catch (e) {
        console.log(e);
      }
    },
  });

  return <SignInContainer formik={formik} styles={styles} />;
};

export default SignIn;
