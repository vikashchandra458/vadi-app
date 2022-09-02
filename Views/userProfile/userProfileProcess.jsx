import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import UserProfile from "./userProfile";

const UserProfileProcess = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    account: "",
    tos: ""
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name cannot be blank"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup
      .string()
      .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    account: Yup.string().required("Account cannot be blank"),
    tos: Yup.string().required("TOS cannot be blank"),
  });

  return (
    <Formik initialValues={initialValues} enableReinitialize validationSchema={validationSchema}>
      {(formik) => <UserProfile {...formik} />}
    </Formik>
  );
};

export default UserProfileProcess;

const styles = StyleSheet.create({});
