import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Toast from "react-native-toast-message";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { API_PATHS } from "../../src/constants/apiPaths";
const ResetPassword = (formik) => {
  const navigation = useNavigation();
  const { values, errors, touched } = formik;
  const [isFrontModalVisible, setIsFrontModalVisible] = React.useState(false);
  const frontDocModal = () =>
    setIsFrontModalVisible(() => !isFrontModalVisible);
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

  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });
  if (!fontsLoad) {
    return null;
  }
  const handleSubmit = () => {
    const obj = {
      email: values.email,
      password: values.confirmPassword,
    };
    alert(
      "Email : " +
        values.email +
        "\nPassword : " +
        values.password +
        "\nConfirm Password : " +
        values.confirmPassword
    );
    // axios
    //   .get(API_PATHS.FORGET + values.email, obj)
    //   .then((res) => {
    //     if (res.data.message === "Mail sent successfully") {
    //       frontDocModal();
    //     }
    //     if (res.data.message === "User does not exists.") {
    //       Toast.show({
    //         type: "info",
    //         text1: res.data.message,
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //     Toast.show({
    //       type: "info",
    //       text1: error,
    //     });
    //   });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.Logo} source={require("../../assets/vlogo.png")} />
        <View style={{textAlign: "center",}}>
        <Text style={styles.Label2}>To reset the password, Enter the Details</Text>
        </View>

        <Toast position="top" topOffset={38}/>

        <View style={{ paddingTop: 40 }}>
          <Text
            style={[
              styles.text,
              {
                color: errors.email && touched.email ? "red" : "#33B7B0",
              },
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
                styles.inputStyle,
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
                styles.inputStyle,
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
                styles.inputStyle,
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

        <View style={{ marginTop: 30}}>
          <TouchableOpacity
            disabled={!(formik.isValid && formik.dirty)}
            onPress={handleSubmit}
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
              <Text style={styles.buttonText}>Reset Password</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View>
          <Modal isVisible={isFrontModalVisible} style={styles.modalContainer}>
            <Image
              style={{ marginBottom: 40 }}
              source={require("../../assets/vlogo.png")}
            />
            <Text style={styles.modalLevel}>
              We have just sent you an email with information to reset your
              account. Remember to check the spam folder.
            </Text>
            <Text style={styles.modalLevel}></Text>
            <Pressable
              style={styles.modalButton}
              onPress={() => {
                frontDocModal();
                navigation.navigate("login");
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
                <Text style={styles.buttonText}>Back to Login</Text>
              </LinearGradient>
            </Pressable>
          </Modal>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F2F6FF",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    alignText: "center",
  },
  Logo: {
    margin: 100,
    height: 32,
    width: 115,
    marginBottom: 50,
  },
  //   text2: {
  //     position: "absolute",
  //     top: 60,
  //     left: 15,
  //     zIndex: 100,
  //     fontFamily: "NunitoSans_400Regular",
  //     backgroundColor: "#F2F6FF",
  //     paddingHorizontal: 20,
  //   },
  //   inputStyle: {
  //     height: 50,
  //     width: 322,
  //     borderWidth: 1,
  //     borderColor: "#33B7B0",
  //     flexDirection: "row",
  //     borderRadius: 10,
  //     paddingHorizontal: 45,
  //     paddingTop: 5,
  //     paddingLeft: 30,
  //   },
  text: {
    position: "absolute",
    top: 30,
    left: 15,
    zIndex: 100,
    fontFamily: "NunitoSans_400Regular",
    backgroundColor: "#F2F6FF",
    paddingHorizontal: 20,
    zIndex: -1,
  },Label2: {
    textAlign: "center",
    fontStyle: "normal",
    fontSize: 14,
    fontFamily: "NunitoSans_400Regular",
    color: "#7A869A",
    marginBottom: 20,
  },
  passwordViewer: {
    alignSelf: "flex-end",
    paddingRight: 30,
    top: -35,
    borderColor: "grey",
  },
  inputStyle: {
    height: 50,
    width: 322,
    borderWidth: 1,
    borderColor: "#33B7B0",
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingLeft: 30,
    zIndex: -2,
  },
  buttonText: {
    color: "#ffff",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
  modalLevel: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    fontFamily: "NunitoSans_400Regular",
    lineHeight: 27,
    textAlign: "center",
    color: "white",
    padding: 20,
  },
  modalButton: {
    borderRadius: 100,
    backgroundColor: "pink",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    position: "absolute",
    marginTop: 140,
    width: 300,
    height: 500,
    backgroundColor: "grey",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
  },
  error: {
    color: "red",
    fontFamily: "NunitoSans_400Regular",
    textAlign: "left",
  },
});
