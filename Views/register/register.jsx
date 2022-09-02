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
} from "react-native";
import SwitchSelector from "react-native-switch-selector";
import Modal from "react-native-modal";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import Header from "../../src/header/header";
import PrivacyNotice from "../../src/privacyNotice/privacyNotice";
import axios from "axios";
import { API_PATHS } from "../../src/constants/apiPaths";
import Toast from "react-native-toast-message";
const Register = (formik) => {
  const [rightIcon, setRightIcon] = useState("eye");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };
  const [rightIcon2, setRightIcon2] = useState("eye");
  const [passwordVisibility2, setPasswordVisibility2] = useState(true);
  const handlePasswordVisibility2 = () => {
    if (rightIcon2 === "eye") {
      setRightIcon2("eye-off");
      setPasswordVisibility2(!passwordVisibility2);
    } else if (rightIcon2 === "eye-off") {
      setRightIcon2("eye");
      setPasswordVisibility2(!passwordVisibility2);
    }
  };
  const navigation = useNavigation();
  const [user, setUser] = useState("investor");
  const [referral, setReferral] = useState("");
  const [isChecked, setChecked] = useState(false);
  const { values, errors, touched } = formik;
  const [isprivacyNotice, setIsprivacyNotice] = React.useState(false);
  const termsDocModal = () => setIsprivacyNotice(() => !isprivacyNotice);

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });
  if (!fontsLoad) {
    return null;
  }

  const handleFormSubmit = (values) => {
    const obj = {
      email: values.email,
      password: values.password,
      refferalCode: values.referral || "",
      role: user,
    };
    axios
      .post(API_PATHS.SIGNUP, obj)
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message) {
          Toast.show({
            type: "info",
            text1: res.data.message,
          });
        }
        if (
          res.data.message ===
          "Success,Verification code has been sent to your Mail"
        ) {
          navigation.navigate("verification", { email: values.email });
        }
        if (res.data.message === "Please verify your Account") {
          Toast.show({
            type: "info",
            text1: "Already Registered!",
            text2: "Please Login and verify your Account.",
          });
        }
      })
      .catch((err) => {
        if (err.message) {
          Toast.show({
            type: "info",
            text1: err.message,
          });
        }
        console.log(err.message);
      });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <Toast position="bottom" bottomOffset={20} />
        <Image style={styles.Logo} source={require("../../assets/vlogo.png")} />
        <Text style={styles.Label1}>Sign Up Here</Text>
        <Text style={styles.Label2}>
          Join the most entrepreneurial Platform
        </Text>

        <View>
          <TouchableOpacity>
            <SwitchSelector
              initial={0}
              onPress={(value) => setUser(value)}
              textColor="#ffff"
              selectedColor="#FFFF"
              backgroundColor="#2BD1A0"
              buttonColor="#4630EB"
              borderColor="#2BD1A0"
              hasPadding
              options={[
                { label: "Investor", value: "investor" },
                { label: "Entrepreneur", value: "entrepreneur" },
              ]}
              testID="gender-switch-selector"
              accessibilityLabel="gender-switch-selector"
            />
          </TouchableOpacity>
        </View>

        <View style={{ paddingTop: 40 }}>
          <Text
            style={[
              styles.text,
              { color: errors.email && touched.email ? "red" : "#33B7B0" },
            ]}
          >
            Email
          </Text>
          <View>
            <TextInput
              name="email"
              placeholder="Juangazz@gmail.com"
              onChangeText={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              value={values.email}
              autoCapitalize="none"
              style={[
                styles.inputStyle2,
                {
                  borderColor:
                    errors.email && touched.email ? "red" : "#33B7B0",
                },
              ]}
            />
          </View>
          {errors.email && touched.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}
        </View>

        <View style={{ paddingTop: 40 }}>
          <Text
            style={[
              styles.text,
              {
                color:
                  errors.confirmEmail && touched.confirmEmail
                    ? "red"
                    : "#33B7B0",
              },
            ]}
          >
            Email Confirmation
          </Text>
          <View>
            <TextInput
              name="confirmEmail"
              placeholder="Juangazz@gmail.com"
              onChangeText={formik.handleChange("confirmEmail")}
              onBlur={formik.handleBlur("confirmEmail")}
              value={values.confirmEmail}
              autoCapitalize="none"
              style={[
                styles.inputStyle2,
                {
                  borderColor:
                    errors.confirmEmail && touched.confirmEmail
                      ? "red"
                      : "#33B7B0",
                },
              ]}
            />
          </View>
          {errors.confirmEmail && touched.confirmEmail && (
            <Text style={styles.error}>{errors.confirmEmail}</Text>
          )}
        </View>

        <View style={{ paddingTop: 40 }}>
          <Text
            style={[
              styles.text,
              {
                color: errors.password && touched.password ? "red" : "#33B7B0",
              },
            ]}
          >
            Password
          </Text>
          <View>
            <TextInput
              name="password"
              secureTextEntry={passwordVisibility}
              placeholder="*****************"
              onChangeText={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              value={values.password}
              autoCapitalize="none"
              style={[
                styles.inputStyle2,
                {
                  borderColor:
                    errors.password && touched.password ? "red" : "#33B7B0",
                },
              ]}
            />
            <Pressable
              onPress={handlePasswordVisibility}
              style={styles.passwordViewer}
            >
              <MaterialCommunityIcons
                name={rightIcon}
                size={22}
                color="#7A869A"
              />
            </Pressable>
          </View>
          {errors.password && touched.password && (
            <Text style={[styles.error, { top: -23 }]}>{errors.password}</Text>
          )}
        </View>

        <View style={{ paddingTop: 40, marginTop: -23 }}>
          <Text
            style={[
              styles.text,
              {
                color:
                  errors.confirmPassword && touched.confirmPassword
                    ? "red"
                    : "#33B7B0",
              },
            ]}
          >
            Confirm Your Password
          </Text>
          <View>
            <TextInput
              name="confirmPassword"
              secureTextEntry={passwordVisibility2}
              placeholder="*****************"
              onChangeText={formik.handleChange("confirmPassword")}
              onBlur={formik.handleBlur("confirmPassword")}
              value={values.confirmPassword}
              autoCapitalize="none"
              style={[
                styles.inputStyle2,
                {
                  borderColor:
                    errors.confirmPassword && touched.confirmPassword
                      ? "red"
                      : "#33B7B0",
                },
              ]}
            />
            <Pressable
              onPress={handlePasswordVisibility2}
              style={styles.passwordViewer}
            >
              <MaterialCommunityIcons
                name={rightIcon2}
                size={22}
                color="#7A869A"
              />
            </Pressable>
          </View>
          {errors.confirmPassword && touched.confirmPassword && (
            <Text style={[styles.error, { top: -23 }]}>
              {errors.confirmPassword}
            </Text>
          )}
        </View>

        <View style={{ paddingTop: 40, marginTop: -23 }}>
          <Text
            style={[
              styles.text,
              {
                color: "#33B7B0",
              },
            ]}
          >
            Referral Code (Optional)
          </Text>
          <View>
            <TextInput
              name="referral"
              onChangeText={(value) => {
                setReferral(value);
              }}
              value={referral}
              autoCapitalize="none"
              style={[
                styles.inputStyle2,
                {
                  borderColor: "#33B7B0",
                },
              ]}
            />
          </View>
        </View>

        <View style={styles.agreement}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#33B7B0" : undefined}
          />

          <View style={styles.privacy}>
            <Text> I have read and accept the </Text>
            <TouchableOpacity
              // opacity={1}
              onPress={termsDocModal}
            >
              <Text style={styles.agreementText}>Privacy Notice</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: -40 }}>
          <TouchableOpacity
            disabled={!(formik.isValid && formik.dirty && isChecked)}
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
                    formik.isValid && formik.dirty && isChecked ? 1 : 0.5,
                },
              ]}
            >
              <Text style={styles.buttonText}>Create Account</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.signin}>
          <Text style={{ fontFamily: "NunitoSans_400Regular" }}>
            I already have an Account
          </Text>
          <TouchableOpacity
            style={{ paddingLeft: 5 }}
            onPress={() => navigation.navigate("login")}
          >
            <Text
              style={{
                fontFamily: "NunitoSans_400Regular",
                color: "#34B6B0",
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

        <Modal isVisible={isprivacyNotice} style={styles.modalContainer}>
          <Text style={[styles.modalLevel, { fontSize: 19, marginTop: 10 }]}>
            Privacy Notice
          </Text>
          <ScrollView>
            <Text style={styles.modalLevel}>
              <PrivacyNotice />
            </Text>
          </ScrollView>
          <Text style={styles.modalLevel}></Text>
          <Pressable
            style={styles.modalButton}
            onPress={() => {
              setChecked(true);
              termsDocModal();
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#4E68E1", "#33B9AF"]}
              width={250}
              height={50}
              style={[{ borderRadius: 100 }]}
            >
              <Text style={styles.buttonText}>Accept</Text>
            </LinearGradient>
          </Pressable>
        </Modal>
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
    marginTop: 90,
    margin: 100,
    height: 32,
    width: 115,
    marginBottom: 50,
  },
  Label1: {
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    fontFamily: "NunitoSans_400Regular",
    lineHeight: 27,
    marginBottom: 20,
  },
  Label2: {
    textAlign: "center",
    fontStyle: "normal",
    fontSize: 14,
    fontFamily: "NunitoSans_400Regular",
    color: "#7A869A",
    marginBottom: 20,
  },
  text: {
    position: "absolute",
    top: 30,
    left: 15,
    zIndex: 1,
    fontFamily: "NunitoSans_400Regular",
    backgroundColor: "#F2F6FF",
    paddingHorizontal: 20,
  },
  inputStyle2: {
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
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
  signin: {
    justifyContent: "center",
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    fontFamily: "NunitoSans_400Regular",
    marginBottom: 50,
    zIndex: -1,
    alignSelf: "center",
  },
  error: {
    color: "red",
    fontFamily: "NunitoSans_400Regular",
    textAlign: "left",
  },
  agreement: {
    marginTop: 25,
    left: 15,
    display: "flex",
    flexDirection: "row",
    fontFamily: "NunitoSans_400Regular",
    marginBottom: 70,
  },
  checkbox: {
    borderColor: "#33B7B0",
    opacity: 0.8,
    width: 20,
    height: 20,
    borderRadius: 6,
  },
  agreementText: {
    textAlign: "center",
    textDecorationLine: "underline",
  },
  passwordViewer: {
    alignSelf: "flex-end",
    paddingRight: 30,
    top: -35,
    borderColor: "grey",
  },
  modalLevel: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 11,
    fontFamily: "NunitoSans_400Regular",
    lineHeight: 17,
    color: "black",
    padding: 20,
  },
  modalButton: {
    borderRadius: 100,
    backgroundColor: "pink",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: -30,
  },
  modalContainer: {
    position: "absolute",
    width: 340,
    height: 700,
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
  },
  privacy: {
    paddingLeft: 10,
    display: "flex",
    flexDirection: "row",
    fontFamily: "NunitoSans_400Regular",
  },
});
export default Register;
