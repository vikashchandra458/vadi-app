import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Register from "./register";

const RegisterProcess = () => {
  const initialValues = {
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: ""
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),

    confirmEmail: Yup.string()
      .email("Invalid email")
      .oneOf([Yup.ref("email"), null], "Email must match")
      .required("Confirm Email is required"),

    password: Yup.string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(/[!@#$%^&*()\-_"=+{};:,<.>]/,"Password must have a special character")
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),

    confirmPassword: Yup.string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(/[!@#$%^&*()\-_"=+{};:,<.>]/,"Password must have a special character")
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .oneOf([Yup.ref("password"), null], "Passwword must match")
      .required("Confirm password is required"),


  });

  return (
    <Formik initialValues={initialValues} enableReinitialize validationSchema={validationSchema}>
      {(formik) => <Register {...formik} />}
    </Formik>
  );
};

export default RegisterProcess;

const styles = StyleSheet.create({});
