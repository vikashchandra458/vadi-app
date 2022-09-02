import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const handleFormSubmit = (value) => {
    alert("Value Selected : " + value);
    navigation.navigate("completeProfile1", { value });
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
        <View>
          <StatusBar style="auto" />
          <Image
            style={styles.Logo}
            source={require("../../assets/vlogo.png")}
          />
          <Text style={styles.Label1}>Welcome to the</Text>
          <Text style={styles.Label1}>Vadi Community</Text>
        </View>

        <View style={styles.footer}>
          <View style={{ marginLeft: 0 }}>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Image
                style={{ alignSelf: "center" }}
                source={require("../../assets/Home.png")}
              />
              <Text style={{ marginTop: 5, color:'#7A869A' }}>Home</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginLeft: 50 }}>
            <TouchableOpacity onPress={() => {}}>
              <Image
                style={{ alignSelf: "center" }}
                source={require("../../assets/Profile.png")}
              />
              <Text style={{ marginTop: 5, color:'#7A869A' }}>Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginLeft: 50 }}>
            <TouchableOpacity onPress={() => {}}>
              <Image
                style={{ alignSelf: "center" }}
                source={require("../../assets/News.png")}
              />
              <Text style={{ marginTop: 5, color:'#7A869A' }}>News</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginLeft: 50 }}>
            <TouchableOpacity onPress={() => {}}>
              <Image
                style={{ alignSelf: "center" }}
                source={require("../../assets/Settings.png")}
              />
              <Text style={{ marginTop: 5, color:'#7A869A' }}>Settings</Text>
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
    marginTop: 214,
    margin: 100,
    height: 84,
    width: 301,
  },
  Label1: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 30,
    fontFamily: "NunitoSans_400Regular",
    lineHeight: 37,
    textAlign: "center",
  },
  buttonText: {
    color: "#ffff",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 188,
    backgroundColor: "white",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
});
export default Welcome;
