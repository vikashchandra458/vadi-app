import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Funding from "./funding";
import { API_PATHS } from "../../src/constants/apiPaths";
import axios from "axios";
const FundingProcess = (email) => {
  const [data, setData] = useState([])
  const obj = {
    email: email.route.params.email
  };
  useEffect(() => {
    axios
      .post(API_PATHS.FETCH_PROFILE, obj)
      .then((res) => {
        // console.log(res.data)
        setData(res.data)
      })
      .catch((err) => console.log(err));
  }, [email.route.params.email]);

  const initialValues = {
    email: email.route.params.email,
    amount:"",
    cryptoType:"",
    TransType:"",
    password: "",
    range:data.range,
    lower: Number(data.lower),
    upper: Number(data.upper),
    firstName: data.firstName,
    lastName: data.lastName,
    fullName: data.fullName,
    // gender:data.,
    dateOfBirth: data.dateOfBirth,
    countryCode: data.countryCode,
    countryOfBirth: data.countryOfBirth,
    cURP: data.cURP,
    rFC: data.rFC,
    tax:data.tax,
    phoneNumber:data.phoneNumber,
    occupation: data.occupation,
    // age: data.,
    street:data.street,
    exterior:data.exterior,
    interior: data.interior,
    postalCode:data.postalCode,
    colony: data.colony,
    muncipiality: data.muncipiality,
    state: data.state,
    documentNo:data.documentNo,
    // isNatural: data.,
    // isAccepted: data.,
    isGeo: data.isGeo,
    isEmailVerified: data.isEmailVerified,
    isProfileCreated: data.isProfileCreated,
  };

  const validationSchema = Yup.object({
    password: Yup
      .string()
      .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(/[!@#$%^&*()\-_"=+{};:,<.>]/, "Password must have a special character")
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })

  return (
    <Formik initialValues={initialValues} enableReinitialize validationSchema={validationSchema}>
      {(formik) => <Funding {...formik} />}
    </Formik>
  );
};

export default FundingProcess;

const styles = StyleSheet.create({});
