import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Login from "./login";

const LoginProcess = () => {
  const initialValues = {
    password: "",
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup
      .string()
      .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(/[!@#$%^&*()\-_"=+{};:,<.>]/, "Password must have a special character")
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  return (
    <Formik initialValues={initialValues} enableReinitialize validationSchema={validationSchema}>
      {(formik) => <Login {...formik} />}
    </Formik>
  );
};

export default LoginProcess;

const styles = StyleSheet.create({});
