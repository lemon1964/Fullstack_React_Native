import { render, screen, fireEvent, waitFor } from "@testing-library/react-native";
import { StyleSheet } from "react-native";
import { SignInContainer } from "../components/SignInContainer";

const input = {
  username: "user",
  password: "password",
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

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();

      const formik = {
        handleSubmit: () => {
          onSubmit(input);
        },
        values: input,
        handleChange: jest.fn(),
        handleBlur: jest.fn(),
        errors: {},
        touched: {},
      };

      render(<SignInContainer formik={formik} styles={styles} />);

      fireEvent.changeText(screen.getByPlaceholderText("Username"), "user");
      fireEvent.changeText(screen.getByPlaceholderText("Password"), "password");
      fireEvent.press(screen.getByText("Sign In"));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "user",
          password: "password",
        });
      });
    });
  });
});
