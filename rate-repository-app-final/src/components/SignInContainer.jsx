import React from "react";
import { TextInput, Pressable, View, Text } from "react-native";

export const SignInContainer = ({ formik, styles }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          formik.errors.username && formik.touched.username && styles.errorInput,
        ]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        onBlur={formik.handleBlur("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.errorText}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={[
          styles.input,
          formik.errors.password && formik.touched.password && styles.errorInput,
        ]}
        placeholder="Password"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  );
};
