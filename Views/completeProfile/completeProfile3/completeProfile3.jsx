import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
  Pressable,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import * as DocumentPicker from "expo-document-picker";
import Modal from "react-native-modal";

const CompleteProfile3 = (formik) => {
  const navigation = useNavigation();
  const { values, errors, touched } = formik;
  const [frontDoc, setFrontDoc] = useState([]);
  const [behindDoc, setBehindDoc] = useState([]);
  const [addressDoc, setAddressDoc] = useState([]);

  const [isFrontModalVisible, setIsFrontModalVisible] = React.useState(false);
  const [isBehindModalVisible, setIsBehindModalVisible] = React.useState(false);
  const [isAddressModalVisible, setIsAddressModalVisible] =
    React.useState(false);

  const frontDocModal = () =>setIsFrontModalVisible(() => !isFrontModalVisible);
  const behindDocModal = () =>setIsBehindModalVisible(() => !isBehindModalVisible);
  const addressDocModal = () =>setIsAddressModalVisible(() => !isAddressModalVisible);

  const pickFrontDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    setFrontDoc(result);
  };
  const pickBehindDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    setBehindDoc(result);
  };
  const pickAddressDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    setAddressDoc(result);
  };

  useEffect(() => {
    frontDoc.name ? setFrontDoc("") : null;
    behindDoc.name ? setBehindDoc("") : null;
    addressDoc.name? setAddressDoc("") : null;
  },[values.range, values.nationality])

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const handleFormSubmit = (values) => {
    const profile3 = {
      email: values.email,
      range: values.range,
      fund: values.fund,
      lower: values.lower,
      upper: values.upper,
      firstName: values.firstName,
      secondName: values.secondName,
      name: values.name,
      gender: values.gender,
      birth: values.birth,
      dateISO: values.dateISO,
      nationality: values.nationality,
      countryBirth: values.countryBirth,
      curp: values.curp ? values.curp : "",
      rfc: values.rfc ? values.rfc : "",
      tax: values.tax ? values.tax : "",
      phone: values.phone,
      occupation: values.occupation ? values.occupation : "",
      age: values.age,
      street: values.street,
      exterior: values.exterior,
      inside: values.inside,
      postalCode: values.postalCode,
      colony: values.colony,
      municipality: values.municipality,
      state: values.state,
      frontDoc: frontDoc,
      behindDoc: behindDoc.name ? behindDoc : "",
      documentNo: values.documentNo,
      addressDoc: addressDoc.name ? addressDoc : "",
      countryCode : values.countryCode
    };
    navigation.navigate("completeProfile4", profile3);
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
          <View style={styles.tab}>
            <View
              style={[
                styles.tab1,
                { backgroundColor: "#D9D9D9", marginLeft: 0 },
              ]}
            >
              <Text style={styles.tabText}>1</Text>
            </View>

            <View style={[styles.tab1, { backgroundColor: "#D9D9D9" }]}>
              <Text style={styles.tabText}>2</Text>
            </View>

            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#33B9AF", "#4E68E1"]}
              style={styles.tab1}
            >
              <Text style={styles.tabText}>3</Text>
            </LinearGradient>

            <View style={[styles.tab1, { backgroundColor: "#D9D9D9" }]}>
              <Text style={styles.tabText}>4</Text>
            </View>
          </View>

          <View style={styles.dottedline}></View>

          <View>
            <Text style={styles.Label1}>Document upload</Text>
          </View>

          <View style={{ marginTop: 40 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#4E68E1", "#33B9AF"]}
              width={322}
              height={50}
              style={[
                {
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                },
              ]}
            >
              <Text style={styles.buttonText}>
                {values.nationality === "MX" ? (
                  <Text>Official ID Front</Text>
                ) : (
                  <Text>Valid Passport</Text>
                )}
              </Text>
            </LinearGradient>
            <View
              style={[
                {
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                  height: 150,
                  borderColor: "#33B7B0",
                  borderWidth: 1,
                  top: -1,
                },
              ]}
            >
              <Pressable onPress={frontDocModal} disabled={!frontDoc.name}>
                <Text
                  style={[
                    styles.fileText,
                    { color: frontDoc.name ? "black" : "#6B6A6A" },
                  ]}
                  numberOfLines={1}
                  ellipsizeMode={"middle"}
                >
                  {frontDoc.name
                    ? frontDoc.name
                    : "No Official ID Front Selected"}
                </Text>
              </Pressable>
              <View
                style={{ borderTopWidth: 1, borderColor: "#D9D9D9", top: 60 }}
              ></View>
              <View style={styles.Uploadbox}>
                <TouchableOpacity
                  onPress={() => {
                    setFrontDoc({});
                  }}
                >
                  <Text style={{ left: -30, color: "#6B6A6A" }}>Clear</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={pickFrontDocument}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#4E68E1", "#33B9AF"]}
                    width={80}
                    height={42}
                    style={[
                      { borderRadius: 100 },
                      {
                        opacity: 1,
                      },
                    ]}
                  >
                    <Text style={styles.uploadText}>Upload</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <Modal
                  isVisible={isFrontModalVisible}
                  style={styles.modalContainer}
                >
                  <Image style={styles.image} source={{uri: frontDoc.uri}} />
                  <Pressable style={styles.modalButton} onPress={frontDocModal}>
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={["#4E68E1", "#33B9AF"]}
                      width={250}
                      height={50}
                      style={[{ borderRadius: 100 }]}
                    >
                      <Text style={styles.buttonText}>Close</Text>
                    </LinearGradient>
                  </Pressable>
                </Modal>
              </View>
            </View>
          </View>
          {values.nationality === "MX" ? (
            <View style={{ marginTop: 40 }}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#4E68E1", "#33B9AF"]}
                width={322}
                height={50}
                style={[
                  {
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  },
                ]}
              >
                <Text style={styles.buttonText}>Official ID Behind</Text>
              </LinearGradient>
              <View
                style={[
                  {
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    height: 150,
                    borderColor: "#33B7B0",
                    borderWidth: 1,
                    top: -1,
                  },
                ]}
              >
                <Pressable onPress={behindDocModal} disabled={!behindDoc.name}>
                  <Text
                    style={[
                      styles.fileText,
                      { color: behindDoc.name ? "black" : "#6B6A6A" },
                    ]}
                    numberOfLines={1}
                    ellipsizeMode={"middle"}
                  >
                    {behindDoc.name
                      ? behindDoc.name
                      : "No Official ID Behind Selected"}
                  </Text>
                </Pressable>

                <View
                  style={{
                    borderTopWidth: 1,
                    borderColor: "#D9D9D9",
                    top: 60,
                  }}
                ></View>
                <View style={styles.Uploadbox}>
                  <TouchableOpacity
                    onPress={() => {
                      setBehindDoc({});
                    }}
                  >
                    <Text style={{ left: -30, color: "#6B6A6A" }}>Clear</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={pickBehindDocument}>
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={["#4E68E1", "#33B9AF"]}
                      width={80}
                      height={42}
                      style={[
                        { borderRadius: 100 },
                        {
                          opacity: 1,
                        },
                      ]}
                    >
                      <Text style={styles.uploadText}>Upload</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <Modal
                    isVisible={isBehindModalVisible}
                    style={styles.modalContainer}
                  >
                    <Image style={styles.image} source={{uri: behindDoc.uri}} />
                    <Pressable
                      style={styles.modalButton}
                      onPress={behindDocModal}
                    >
                      <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={["#4E68E1", "#33B9AF"]}
                        width={250}
                        height={50}
                        style={[{ borderRadius: 100 }]}
                      >
                        <Text style={styles.buttonText}>Close</Text>
                      </LinearGradient>
                    </Pressable>
                  </Modal>
                  
                </View>
              </View>
            </View>
          ) : null}

          <View style={{ paddingTop: 40 }}>
            <Text style={[styles.text, { color:
                      errors.documentNo && touched.documentNo ? "red" : "#33B7B0",}]}>
              {values.nationality === "MX" ? (
                <Text>Identification Number </Text>
              ) : (
                <Text>Passport Number </Text>
              )}
            </Text>
            <View>
              <TextInput
                name="documentno"
                placeholder="Document No"
                keyboardType="numeric"
                onChangeText={(text)=>{formik.handleChange("documentNo")(text.replace(/\D/g, ''))}}
                onBlur={formik.handleBlur("documentNo")}
                value={values.documentNo}
                autoCapitalize="none"
                style={[
                  styles.inputStyle,
                  {
                    borderColor:
                      errors.documentNo && touched.documentNo ? "red" : "#33B7B0",
                  },
                ]}
              />
              {errors.documentNo && touched.documentNo && (
                <Text style={styles.error}>{errors.documentNo}</Text>
              )}
            </View>
          </View>

          {values.range === "$10,000 - $59,999" ? (
            null
          ) : (
            <View style={{ marginTop: 40 }}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#4E68E1", "#33B9AF"]}
                width={322}
                height={50}
                style={[
                  {
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  },
                ]}
              >
                <Text style={styles.buttonText}>Proof of address</Text>
              </LinearGradient>
              <View
                style={[
                  {
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    height: 150,
                    borderColor: "#33B7B0",
                    borderWidth: 1,
                    top: -1,
                  },
                ]}
              >
                <Pressable
                  onPress={addressDocModal}
                  disabled={!addressDoc.name}
                >
                  <Text
                    style={[
                      styles.fileText,
                      { color: addressDoc.name ? "black" : "#6B6A6A" },
                    ]}
                    numberOfLines={1}
                    ellipsizeMode={"middle"}
                  >
                    {addressDoc.name
                      ? addressDoc.name
                      : "No Proof of Address Selected"}
                  </Text>
                </Pressable>
                <View
                  style={{
                    borderTopWidth: 1,
                    borderColor: "#D9D9D9",
                    top: 60,
                  }}
                ></View>
                <View style={styles.Uploadbox}>
                  <TouchableOpacity
                    onPress={() => {
                      setAddressDoc({});
                    }}
                  >
                    <Text style={{ left: -30, color: "#6B6A6A" }}>Clear</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={pickAddressDocument}>
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={["#4E68E1", "#33B9AF"]}
                      width={80}
                      height={42}
                      style={[
                        { borderRadius: 100 },
                        {
                          opacity: 1,
                        },
                      ]}
                    >
                      <Text style={styles.uploadText}>Upload</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <Modal
                    isVisible={isAddressModalVisible}
                    style={styles.modalContainer}
                  >
                    <Image style={styles.image} source={{uri: addressDoc.uri}} />
                    <Pressable
                      style={styles.modalButton}
                      onPress={addressDocModal}
                    >
                      <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={["#4E68E1", "#33B9AF"]}
                        width={250}
                        height={50}
                        style={[{ borderRadius: 100 }]}
                      >
                        <Text style={styles.buttonText}>Close</Text>
                      </LinearGradient>
                    </Pressable>
                  </Modal>
                </View>
              </View>
            </View>
          )}
          <View style={{ marginTop: 50, marginBottom: 50 }}>
            <TouchableOpacity
              disabled={
                !(values.range === "$10,000 - $59,999"
                  ? (values.documentNo && frontDoc.name && behindDoc.name) ||
                    (values.nationality !== "MX" &&
                      values.documentNo &&
                      frontDoc.name)
                  : (values.documentNo &&
                      frontDoc.name &&
                      behindDoc.name &&
                      addressDoc.name) ||
                    (values.nationality !== "MX" &&
                      values.documentNo &&
                      frontDoc.name &&
                      addressDoc.name))
              }
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
                    opacity:
                      (values.range === "$10,000 - $59,999" &&
                        values.documentNo &&
                        frontDoc.name &&
                        behindDoc.name) ||
                      (values.range === "$10,000 - $59,999" &&
                        values.documentNo &&
                        frontDoc.name &&
                        values.nationality !== "MX") ||
                      (values.documentNo &&
                        frontDoc.name &&
                        behindDoc.name &&
                        addressDoc.name) ||
                      (values.nationality !== "MX" &&
                        values.documentNo &&
                        frontDoc.name &&
                        addressDoc.name)
                        ? 1
                        : 0.5,
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
  buttonText: {
    color: "#ffff",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
    paddingTop: 12,
    paddingBottom: 12,
    textAlign: "center",
  },
  error: {
    color: "red",
    fontFamily: "NunitoSans_400Regular",
    textAlign: "left",
  },
  Uploadbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    top: 70,
    left: -30,
  },
  fileText: {
    textAlign: "center",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
    top: 30,
    left: 10,
    width: 250,
  },
  uploadText: {
    color: "#ffff",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 5,
    textAlign: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    height: 650,
    width: 322,
    resizeMode: "stretch",
  },
  modalButton: {
    borderRadius: 100,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 50,
  },
  modalContainer: {
    width: 322,
    height: 500,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
  },
});
export default CompleteProfile3;
