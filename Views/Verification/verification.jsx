import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  LogBox
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CountDown from "react-native-countdown-component";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import OTPTextView from "react-native-otp-textinput";
import axios from "axios";
import { API_PATHS } from "../../src/constants/apiPaths";
import Toast from "react-native-toast-message";
LogBox.ignoreLogs(["EventEmitter.removeListener"]);
const Verification = (profile) => {
  const email = profile.route.params.email;
  const [otpInput, setOtpInput] = useState("");
  const navigation = useNavigation();
  const [isResend, setIsResend] = useState(true);

  const init = () => {
    const obj = {
      email: email,
      otp: Number(otpInput),
      timeStamp: Math.round(Date.now() / 1000),
    };
    console.log(obj);
    axios
      .post(API_PATHS.VALIDATE_OTP, obj)
      .then((res) => {
        // console.log(res.data);
        if (res.data.message) {
          Toast.show({
            type: "info",
            text1: res.data.message,
          });
        }
        if (
          res.data.message === "User Confirmed his/her Email" ||
          res.data.message === "Already Verified"
        ) {
          navigation.navigate("accountLevel", { email: email });
        }
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

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const resendOTP = (e) => {
    axios
      .get(`${API_PATHS.RESEND_OTP}/${email} `)
      .then((res) => {
        console.log(res.data.message);
        Toast.show({
          type: "info",
          text1: res.data.message,
        });
      })
      .catch((error) => console.log(error));
    setIsResend(false);
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <Image style={styles.Logo} source={require("../../assets/vlogo.png")} />
        <View>
          <Text style={styles.Label1}>{email}</Text>
          <Text style={styles.Label1}>
            We have sent you a link to your email to validate it.
          </Text>
        </View>
        <Toast position="top" topOffset={38} />

        <Text style={styles.label2}>
          You did not receive it? Click{" "}
          <TouchableOpacity disabled={!isResend} onPress={(e) => resendOTP(e)}>
            <Text
              style={{
                fontFamily: "NunitoSans_400Regular",
                color: !isResend ? "grey" : "#34B6B0",
                textDecorationLine: "underline",
                top: 4,
                left: 5,
              }}
            >
              Here
            </Text>
          </TouchableOpacity>
        </Text>

        <Text style={styles.label3}>Insert Verification code</Text>

        <View style={styles.container}>
          <OTPTextView
            handleTextChange={(text) => setOtpInput(text)}
            // ref={(e) => (input1 = e)}
            containerStyle={styles.textInputContainer}
            textInputStyle={styles.roundedTextInput}
            inputCount={6}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.resend}>
          <Text
            style={{
              fontFamily: "NunitoSans_400Regular",
            }}
          >
            Resend code in
          </Text>
          <CountDown
            until={isResend ? 59 : 0}
            size={15}
            // running={isResend}
            onFinish={() => {
              setIsResend(true);
            }}
            digitStyle={{ backgroundColor: "#F2F6FF" }}
            digitTxtStyle={{ color: "#1CC625" }}
            timeToShow={["S"]}
            timeLabels={{ s: "" }}
          />
          <Text
            style={{
              fontFamily: "NunitoSans_400Regular",
            }}
          >
            s
          </Text>
        </View>
        <View style={{ marginTop: -150 }}>
          <TouchableOpacity
            onPress={() => {
              init();
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#4E68E1", "#33B9AF"]}
              width={322}
              height={50}
              style={{ borderRadius: 100 }}
            >
              <Text style={styles.buttonText}>Validate</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "#ffff",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
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
  },
  Label1: {
    height: 40,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    fontFamily: "NunitoSans_400Regular",
    color: "#000000",
    textAlign: "center",
  },
  buttonText: {
    color: "#ffff",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
  },
  label2: {
    marginTop: 30,
    height: 60,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    fontFamily: "NunitoSans_400Regular",
    color: "#7A869A",
    textAlign: "center",
  },
  label3: {
    marginTop: 10,
    height: 40,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    fontFamily: "NunitoSans_400Regular",
    color: "#000000",
    textAlign: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F6FF",
    padding: 5,
  },
  textInputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2BD1A0",
    borderBottomWidth: 1,
    fontFamily: "NunitoSans_400Regular",
    height: 43,
    width: 37,
  },
  resend: {
    marginBottom: 270,
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    fontFamily: "NunitoSans_400Regular",
    alignItems: "center",
  },
  error: { color: "red", fontFamily: "NunitoSans_400Regular" },
});
export default Verification;
