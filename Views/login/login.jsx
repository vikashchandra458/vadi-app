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
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import { API_PATHS } from "../../src/constants/apiPaths";
import Toast from "react-native-toast-message";

const Login = (formik) => {
  const navigation = useNavigation();
  const { values, errors, touched } = formik;
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [access_token, setAccessToken] = useState("");
  const [rightIcon, setRightIcon] = useState("eye");

  const validateUser = () => {
    axios
      .get(`${API_PATHS.RESEND_OTP}/${values.email} `)
      .then((res) => {
        Toast.show({
          type: "info",
          text1: res.data.message,
        });
        navigation.navigate("verification", { email: values.email });
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = () => {
    const obj = {
      email: values.email,
      password: values.password,
    };
    axios
      .post(API_PATHS.LOGIN, obj)
      .then((res) => {
        if (res.data.message) {
          Toast.show({
            type: "info",
            text1: res.data.message,
          });
        }
        res.data.message === "Login Success"
          ? res.data.isVerified
            ? !res.data.isProfileCompleted
              ? navigation.navigate("accountLevel", { email: values.email })
              : navigation.navigate("funding", { email: values.email })
            : validateUser()
          : null;
      })
      .catch((err) => {
        if (err.message) {
          Toast.show({
            type: "info",
            text1: err.message,
          });
        }
      });
  };

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <StatusBar style="auto" />
          <Image
            style={styles.Logo}
            source={require("../../assets/vlogo.png")}
          />
          <Text style={styles.Label1}>Welcome Back</Text>
          <Text style={styles.Label2}>Hello there, sign in to continue!</Text>

          <Toast position="top" topOffset={38}/>

          <View style={{ paddingTop: 70 }}>
            <Text
              style={[
                styles.text2,
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
                style={[
                  styles.inputStyle1,
                  {
                    borderColor:
                      errors.email && touched.email ? "red" : "#33B7B0",
                  },
                ]}
              />
            </View>
            {errors.email && touched.email && (
              <Text
                style={{
                  color: "red",
                  fontFamily: "NunitoSans_400Regular",
                  textAlign: "left",
                }}
              >
                {errors.email}
              </Text>
            )}
          </View>

          <View style={{ paddingTop: 40 }}>
            <Text
              style={[
                styles.text1,
                {
                  color:
                    errors.password && touched.password ? "red" : "#33B7B0",
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
              <Text
                style={{
                  color: "red",
                  top: -23,
                  fontFamily: "NunitoSans_400Regular",
                  textAlign: "left",
                }}
              >
                {errors.password}
              </Text>
            )}
          </View>

          <TouchableOpacity
            style={styles.resetPassword}
            onPress={() => navigation.navigate("forgotPassword")}
          >
            <Text style={{ color: "#34B6B0" }}>Forgot Password?</Text>
          </TouchableOpacity>

          <View style={{ marginTop: 50 }}>
            <TouchableOpacity
              disabled={!(formik.isValid && formik.dirty)}
              onPress={() => {
                handleSubmit();
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
                <Text style={styles.buttonText}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.signup}>
            <Text style={{ fontFamily: "NunitoSans_400Regular" }}>
              Don’t Have an Account?
            </Text>
            <TouchableOpacity
              style={{ paddingLeft: 5 }}
              onPress={() => navigation.navigate("register")}
            >
              <Text
                style={{
                  fontFamily: "NunitoSans_400Regular",
                  color: "#34B6B0",
                }}
              >
                Sign Up
              </Text>
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
    marginBottom: 80,
  },
  Label1: {
    margin: 5,
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    fontFamily: "NunitoSans_400Regular",
    lineHeight: 27,
  },
  Label2: {
    marginTop: 10,
    textAlign: "center",
    fontStyle: "normal",
    fontSize: 14,
    fontFamily: "NunitoSans_400Regular",
    color: "#7A869A",
  },
  text1: {
    position: "absolute",
    top: 30,
    left: 15,
    zIndex: 1,
    fontFamily: "NunitoSans_400Regular",
    backgroundColor: "#F2F6FF",
    paddingHorizontal: 20,
  },
  inputStyle1: {
    height: 50,
    borderWidth: 1,
    borderColor: "#33B7B0",
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingLeft: 30,
  },
  text2: {
    position: "absolute",
    top: 60,
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
  resetPassword: {
    fontStyle: "normal",
    fontWeight: "400",
    marginTop: -14,
    color: "#7A869A",
    alignSelf:'flex-end'
  },
  buttonText: {
    color: "#ffff",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
  signup: {
    marginTop: 15,
    flexDirection: "row",
    fontFamily: "NunitoSans_400Regular",
    alignSelf:'center',
  },
  passwordViewer: {
    alignSelf: "flex-end",
    paddingRight: 30,
    top: -35,
    borderColor: "grey",
  },
});
export default Login;
