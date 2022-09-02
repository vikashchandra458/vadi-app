import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import Checkbox from "expo-checkbox";

import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";

const CompleteProfile2 = (formik) => {
  const navigation = useNavigation();

  const { values, errors, touched } = formik;
  const [geoLocation, setGeoLocation] = useState(false);
  const [terms, setTerms] = useState(false);
  const [isNatural, setIsNatural] = useState(false);
  const [isGeo, setIsGeo] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const handleFormSubmit = (values) => {
  
    if (values.range === "$0 - $9,999") {
      const profile3 = {
        email: values.email,
        range: values.range,
        fund: values.fund,
        lower: values.lower,
        upper: values.upper,
        firstName: values.firstName,
        secondName: values.secondName,
        name: values.name,
        birth: values.birth,
        dateISO: values.dateISO,
        nationality: values.nationality,
        countryBirth: values.countryBirth,
        curp: values.curp ? values.curp : "",
        rfc: values.rfc ? values.rfc : "",
        tax: values.tax ? values.tax : "",
        phone: values.phone,
        age: values.age,
        occupation: values.occupation ? values.occupation : "",
        street: values.street,
        exterior: values.exterior,
        inside: values.inside,
        postalCode: values.postalCode,
        colony: values.colony,
        municipality: values.municipality,
        state: values.state,
        countryCode : values.countryCode
      };
      navigation.navigate("completeProfile4", { ...profile3 });
    } else {
      navigation.navigate("completeProfile3", { ...values });
    }
    // Axios.post("http://localhost:9000/signin", {name: values.name, email:values.email}).then(res => {
    //      if(res.data === "Successfully Registered. !!!")
    //      { alert(res.data)
    //        }
    //      else{alert(res.data)}
    //    });
    //      values.preventDefault()
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <StatusBar style="auto" />
          <Image
            style={styles.Logo}
            source={require("../../../assets/vlogo.png")}
          />

          {values.range === "$0 - $9,999" ? (
            <View style={styles.tab}>
              <View
                style={[
                  styles.tab1,
                  { backgroundColor: "#D9D9D9", marginLeft: 0 },
                ]}
              >
                <Text style={styles.tabText}>1</Text>
              </View>

              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#33B9AF", "#4E68E1"]}
                style={styles.tab1}
              >
                <Text style={styles.tabText}>2</Text>
              </LinearGradient>

              <View style={[styles.tab1, { backgroundColor: "#D9D9D9" }]}>
                <Text style={styles.tabText}>3</Text>
              </View>
            </View>
          ) : (
            <View style={styles.tab}>
              <View
                style={[
                  styles.tab1,
                  { backgroundColor: "#D9D9D9", marginLeft: 0 },
                ]}
              >
                <Text style={styles.tabText}>1</Text>
              </View>

              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#33B9AF", "#4E68E1"]}
                style={[styles.tab1]}
              >
                <Text style={styles.tabText}>2</Text>
              </LinearGradient>

              <View style={[styles.tab1, { backgroundColor: "#D9D9D9" }]}>
                <Text style={styles.tabText}>3</Text>
              </View>

              <View style={[styles.tab1, { backgroundColor: "#D9D9D9" }]}>
                <Text style={styles.tabText}>4</Text>
              </View>
            </View>
          )}
          {values.range === "$0 - $9,999" ? (
            <View style={[styles.dottedline, { width: 120, left: 90 }]}></View>
          ) : (
            <View style={styles.dottedline}></View>
          )}

          <View>
            <Text style={styles.Label1}>Home Address</Text>
          </View>

          <View style={{ paddingTop: 40 }}>
            <Text
              style={[
                styles.text,
                { color: errors.street && touched.street ? "red" : "#33B7B0" },
              ]}
            >
              Street
            </Text>
            <View>
              <TextInput
                name="street"
                onChangeText={formik.handleChange("street")}
                onBlur={formik.handleBlur("street")}
                value={values.street}
                autoCapitalize="none"
                style={[
                  styles.inputStyle,
                  {
                    borderColor:
                      errors.street && touched.street ? "red" : "#33B7B0",
                  },
                ]}
              />
            </View>
            {errors.street && touched.street && (
              <Text style={styles.error}>{errors.street}</Text>
            )}
          </View>

          <View style={{ paddingTop: 40, flexDirection: "row" }}>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={[
                  styles.text,
                  {
                    top: -10,
                    color:
                      errors.exterior && touched.exterior ? "red" : "#33B7B0",
                  },
                ]}
              >
                No. Exterior
              </Text>
              <TextInput
                name="exterior"
                keyboardType="numeric"
                onChangeText={(text)=>{formik.handleChange("exterior")(text.replace(/\D/g, ''))}}
                onBlur={formik.handleBlur("exterior")}
                value={values.exterior}
                autoCapitalize="none"
                style={[
                  styles.inputStyle,
                  {
                    width: 150,
                    marginRight: 20,
                    borderColor:
                      errors.exterior && touched.exterior ? "red" : "#33B7B0",
                  },
                ]}
              />
              {errors.exterior && touched.exterior && (
                <Text style={styles.error}>{errors.exterior}</Text>
              )}
            </View>

            <View style={{ flexDirection: "column" }}>
              <Text
                style={[
                  styles.text,
                  {
                    top: -10,
                    color: errors.inside && touched.inside ? "red" : "#33B7B0",
                  },
                ]}
              >
                No. Interior
              </Text>
              <TextInput
                name="inside"
                keyboardType="numeric"
                onChangeText={(text)=>{formik.handleChange("inside")(text.replace(/\D/g, ''))}}
                onBlur={formik.handleBlur("inside")}
                value={values.inside}
                autoCapitalize="none"
                style={[
                  styles.inputStyle,
                  {
                    width: 150,
                    borderColor:
                      errors.inside && touched.inside ? "red" : "#33B7B0",
                  },
                ]}
              />
              {errors.inside && touched.inside && (
                <Text style={styles.error}>{errors.inside}</Text>
              )}
            </View>
          </View>

          <View style={{ paddingTop: 40 }}>
            <Text
              style={[
                styles.text,
                {
                  color:
                    errors.postalCode && touched.postalCode ? "red" : "#33B7B0",
                },
              ]}
            >
              Postal Code
            </Text>
            <View>
              <TextInput
                name="postalCode"
                keyboardType="numeric"
                onChangeText={(text)=>{formik.handleChange("postalCode")(text.replace(/\D/g, ''))}}
                onBlur={formik.handleBlur("postalCode")}
                value={values.postalCode}
                autoCapitalize="none"
                style={[
                  styles.inputStyle,
                  {
                    borderColor:
                      errors.postalCode && touched.postalCode
                        ? "red"
                        : "#33B7B0",
                  },
                ]}
              />
            </View>
            {errors.postalCode && touched.postalCode && (
              <Text style={styles.error}>{errors.postalCode}</Text>
            )}
          </View>

          <View style={{ paddingTop: 40 }}>
            <Text
              style={[
                styles.text,
                {
                  color: errors.colony && touched.colony ? "red" : "#33B7B0",
                },
              ]}
            >
              Colony
            </Text>
            <View>
              <TextInput
                name="colony"
                onChangeText={formik.handleChange("colony")}
                onBlur={formik.handleBlur("colony")}
                value={values.colony}
                autoCapitalize="none"
                style={[
                  styles.inputStyle,
                  {
                    borderColor:
                      errors.colony && touched.colony ? "red" : "#33B7B0",
                  },
                ]}
              />
            </View>
            {errors.colony && touched.colony && (
              <Text style={styles.error}>{errors.colony}</Text>
            )}
          </View>

          <View style={{ paddingTop: 40 }}>
            <Text
              style={[
                styles.text,
                {
                  color:
                    errors.municipality && touched.municipality
                      ? "red"
                      : "#33B7B0",
                },
              ]}
            >
              Municipality
            </Text>
            <View>
              <TextInput
                name="municipality"
                onChangeText={formik.handleChange("municipality")}
                onBlur={formik.handleBlur("municipality")}
                value={values.municipality}
                autoCapitalize="none"
                style={[
                  styles.inputStyle,
                  {
                    borderColor:
                      errors.municipality && touched.municipality
                        ? "red"
                        : "#33B7B0",
                  },
                ]}
              />
            </View>
            {errors.municipality && touched.municipality && (
              <Text style={styles.error}>{errors.municipality}</Text>
            )}
          </View>

          <View style={{ paddingTop: 40 }}>
            <Text
              style={[
                styles.text,
                {
                  color: errors.state && touched.state ? "red" : "#33B7B0",
                },
              ]}
            >
              State
            </Text>
            <View>
              <TextInput
                name="state"
                onChangeText={formik.handleChange("state")}
                onBlur={formik.handleBlur("state")}
                value={values.state}
                autoCapitalize="none"
                style={[
                  styles.inputStyle,
                  {
                    borderColor:
                      errors.state && touched.state ? "red" : "#33B7B0",
                  },
                ]}
              />
            </View>
            {errors.state && touched.state && (
              <Text style={styles.error}>{errors.state}</Text>
            )}
          </View>

          <View style={{ marginTop: 40, marginBottom: 50 }}>
            <TouchableOpacity
              disabled={!(formik.isValid && formik.dirty)}
              onPress={() => {
                handleFormSubmit(values);
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#4E68E1", "#33B9AF"]}
                width={322}
                height={50}
                style={[
                  { borderRadius: 100 },
                  {
                    opacity: formik.isValid && formik.dirty ? 1 : 0.5,
                  },
                ]}
              >
                <Text style={styles.buttonText}>Next</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F2F6FF",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  Logo: {
    margin: 100,
    height: 32,
    width: 115,
    marginBottom: 50,
    marginTop: 50,
  },
  agreement: {
    marginTop: 25,
    left: 15,
    display: "flex",
    flexDirection: "row",
    fontFamily: "NunitoSans_400Regular",
    marginBottom: 20,
  },
  checkbox: {
    borderColor: "#33B7B0",
    opacity: 0.8,
    width: 20,
    height: 20,
    borderRadius: 6,
  },
  agreementText: {
    left: -10,
    paddingLeft: 6,
    width: 300,
    textAlign: "center",
  },
  tab: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  tab1: {
    width: 35,
    height: 35,
    marginLeft: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  dottedline: {
    borderColor: "#33B7B0",
    borderStyle: "dotted",
    borderWidth: 0.5,
    width: 210,
    zIndex: -1,
    left: 49,
    top: -17,
  },
  Label1: {
    marginTop: 30,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    fontFamily: "NunitoSans_400Regular",
    lineHeight: 27,
    textAlign: "center",
  },
  text: {
    position: "absolute",
    top: 30,
    left: 15,
    zIndex: 100,
    fontFamily: "NunitoSans_400Regular",
    backgroundColor: "#F2F6FF",
    paddingHorizontal: 20,
  },
  inputStyle: {
    height: 50,
    borderWidth: 1,
    borderColor: "#33B7B0",
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingLeft: 30,
  },
  text: {
    position: "absolute",
    top: 30,
    left: 15,
    zIndex: 90,
    fontFamily: "NunitoSans_400Regular",
    backgroundColor: "#F2F6FF",
    paddingHorizontal: 20,
  },

  buttonText: {
    color: "#ffff",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
  },
  error: {
    color: "red",
    fontFamily: "NunitoSans_400Regular",
    textAlign: "left",
  },
  agreement: {
    // top: -280,
    left: 15,
    display: "flex",
    flexDirection: "row",
    fontFamily: "NunitoSans_400Regular",
    // marginBottom: 30,
    marginTop: 25,
  },
  checkbox: {
    borderColor: "#33B7B0",
    opacity: 0.8,
    width: 20,
    height: 20,
    borderRadius: 6,
  },
  agreementText: {
    top: -3,
    paddingLeft: 16,
    width: 290,
  },
});
export default CompleteProfile2;
