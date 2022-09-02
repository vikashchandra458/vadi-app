import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from "yup"
import { Formik } from 'formik'
import Forgot from './forgot'

const ForgotProcess = () => {

    const initialValues = {
        email : ""
    }

    const validationSchema = Yup.object({
        email: Yup.string().email().required("Email cannot be blank")        
    })
  return (
    <Formik initialValues={initialValues} enableReinitialize validationSchema={validationSchema}>
    {(formik) => <Forgot {...formik} />}
  </Formik>
  )
}

export default ForgotProcess

const styles = StyleSheet.create({})