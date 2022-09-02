import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import ResetPassword from "./resetPassword";

const ResetPasswordProcess = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Email cannot be blank"),
    password: Yup.string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(
        /[!@#$%^&*()\-_"=+{};:,<.>]/,
        "Password must have a special character"
      )
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),

    confirmPassword: Yup.string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(
        /[!@#$%^&*()\-_"=+{};:,<.>]/,
        "Password must have a special character"
      )
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .oneOf([Yup.ref("password"), null], "Passwword must match")
      .required("Confirm password is required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}
    >
      {(formik) => <ResetPassword {...formik} />}
    </Formik>
  );
};

export default ResetPasswordProcess;

const styles = StyleSheet.create({});
