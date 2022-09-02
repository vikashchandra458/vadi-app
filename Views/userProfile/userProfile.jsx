import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";

const UserProfile = (formik) => {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  const { values, errors, touched } = formik;
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const handleFormSubmit = (values) => {
    alert(
      "Name : " +
        values.name +
        "\nEmail : " +
        values.email +
        "\nPassword : " +
        values.password +
        "\nAccount : " +
        values.account +
        "\nTOS  : " +
        values.tos +
        "\nAgree : " +
        isChecked
    );
    navigation.navigate("accountLevel");
    // Axios.post("http://localhost:9000/signup", {name: values.name, email:values.email}).then(res => {
    //      if(res.data === "Successfully Registered. !!!")
    //      { alert(res.data)
    //        }
    //      else{alert(res.data)}
    //    });
    //      values.preventDefault()
  };

  return (
    <KeyboardAwareScrollView>
      <ScrollView contentContainerStyle={styles.MainContainer}>
          <StatusBar style="auto" />
          <Image
            style={styles.Logo}
            source={require("../../assets/userbackgound.png")}
          />
          <Image
            style={styles.profileLogo}
            source={require("../../assets/profilelogo.png")}
          />

          <View style={{ paddingTop: 40, marginTop:-160 }}>
            <Text
              style={[
                styles.text,
                { color: errors.name && touched.name ? "red" : "#33B7B0" },
              ]}
            >
              Full Name
            </Text>
            <View>
              <TextInput
                name="name"
                onChangeText={formik.handleChange("name")}
                onBlur={formik.handleBlur("name")}
                placeholder="Juan gonzalez garcia"
                value={values.name}
                style={[
                  styles.inputStyle,
                  {
                    borderColor:
                      errors.name && touched.name ? "red" : "#33B7B0",
                  },
                ]}
              />
            </View>
            {errors.name && touched.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}
          </View>

          <View style={{ paddingTop: 40 }}>
            <Text
              style={[
                styles.text,
                { color: errors.email && touched.email ? "red" : "#33B7B0" },
              ]}
            >
              Email Id
            </Text>
            <View>
              <TextInput
                name="email"
                onChangeText={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                value={values.email}
                autoCapitalize="none"
                placeholder="Juangazz@gmail.com"
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
                onChangeText={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
                value={values.password}
                autoCapitalize="none"
                secureTextEntry={true}
                placeholder="*****************"
                style={[
                  styles.inputStyle,
                  {
                    borderColor:
                      errors.password && touched.password ? "red" : "#33B7B0",
                  },
                ]}
              />
            </View>
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
          </View>

          <View style={{ paddingTop: 40 }}>
            <Text
              style={[
                styles.text,
                {
                  color: errors.account && touched.account ? "red" : "#33B7B0",
                },
              ]}
            >
              Personal or business Account
            </Text>
            <View>
              <TextInput
                name="account"
                onChangeText={formik.handleChange("account")}
                onBlur={formik.handleBlur("account")}
                value={values.account}
                autoCapitalize="none"
                placeholder="Juangazz@gmail.com"
                style={[
                  styles.inputStyle,
                  {
                    borderColor:
                      errors.account && touched.account ? "red" : "#33B7B0",
                  },
                ]}
              />
            </View>
            {errors.account && touched.account && (
              <Text style={styles.error}>{errors.account}</Text>
            )}
          </View>

          <View style={{ paddingTop: 40 }}>
            <Text
              style={[
                styles.text,
                { color: errors.tos && touched.tos ? "red" : "#33B7B0" },
              ]}
            >
              TOS Acceptance
            </Text>
            <View>
              <TextInput
                name="tos"
                onChangeText={formik.handleChange("tos")}
                onBlur={formik.handleBlur("tos")}
                value={values.tos}
                autoCapitalize="none"
                placeholder="*****************"
                style={[
                  styles.inputStyle,
                  {
                    borderColor: errors.tos && touched.tos ? "red" : "#33B7B0",
                  },
                ]}
              />
            </View>
            {errors.tos && touched.tos && (
              <Text style={styles.error}>{errors.tos}</Text>
            )}
          </View>

          <View style={styles.agreement}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#33B7B0" : undefined}
            />

            <TouchableOpacity>
              <Text style={styles.agreementText}>
                I have read and accept thr terms and conditions of use of vadi
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{  marginTop: 40, marginBottom: 50 }}>
            <TouchableOpacity
              disabled={!(formik.isValid && formik.dirty)}
              onPress={() => {
                isChecked
                  ? handleFormSubmit(values)
                  : alert("Please agree the terms and Condition to proceed");
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#4E68E1", "#33B9AF"]}
                width={322}
                height={50}
                style={[
                  { borderRadius: 100, width:322,height:50},
                  {
                    opacity: formik.isValid && formik.dirty ? 1 : 0.5,
                  },
                ]}
              >
                <Text style={styles.buttonText}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>
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
    resizeMode: "stretch",
    marginTop: -1,
    width: 417,
    height: 320,
  },
  profileLogo: {
    top: -230,
    width: 150,
    height: 150,
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
    width:322,
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
    textAlign: "center",
  },
  agreement: {
    marginTop: 25,
    left: 15,
    display: "flex",
    flexDirection: "row",
    fontFamily: "NunitoSans_400Regular",
  },
  checkbox: {
    borderColor: "#33B7B0",
    opacity: 0.8,
    width: 20,
    height: 20,
    borderRadius: 6,
  },
  agreementText: {
    paddingLeft: 16,
    width: 300,
  },
  error: {
    color: "red",
    fontFamily: "NunitoSans_400Regular",
    textAlign:'left'
  },
});
export default UserProfile;
