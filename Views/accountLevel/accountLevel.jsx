import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";

const UserProfile = (email) => {
  const navigation = useNavigation();
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });

  if (!fontsLoad) {
    return null;
  }

  const handleFormSubmit = (range) => {
    const limit = { lower: "", upper: "" };
    if (range === "$0 - $9,999") {
      limit.lower = 0;
      limit.upper = 9999;
    }
    if (range === "$10,000 - $59,999") {
      limit.lower = 10000;
      limit.upper = 59999;
    }
    if (range === "$60,000 - $1,20,000") {
      limit.lower = 60000;
      limit.upper = 120000;
    }
    const accountLevel = {
      lower: limit.lower,
      upper: limit.upper,
      range: range,
      email: email.route.params.email
    };
    // alert("\nValue Selected : " + range+ "\nEmail : " + email.route.params.email);
    navigation.navigate("completeProfile1", { ...accountLevel });
    // Axios.post("http://localhost:9000/signup", {name: values.name, email:values.email}).then(res => {
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

          <Text style={styles.Label1}>Define Account Level</Text>
          <Text style={[styles.Label2, { marginTop: 30 }]}>
            How much do you want to invest?
          </Text>
          <Text style={styles.Label2}>
            Define Your Monthly payment limit to your Account
          </Text>

          <View style={{ marginTop: 60 }}>
            <TouchableOpacity
              onPress={() => {
                handleFormSubmit("$0 - $9,999");
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#4E68E1", "#33B9AF"]}
                width={322}
                height={50}
                style={{ borderRadius: 100, paddingBottom: 10 }}
              >
                <Text style={styles.buttonText}>$0 - $9,999 MXN</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => {
                handleFormSubmit("$10,000 - $59,999");
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#4E68E1", "#33B9AF"]}
                width={322}
                height={50}
                style={{ borderRadius: 100, paddingBottom: 10 }}
              >
                <Text style={styles.buttonText}>
                  From $10,000 - $59,999 MXN
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 20}}>
            <TouchableOpacity
              onPress={() => {
                handleFormSubmit("$60,000 - $1,20,000");
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#4E68E1", "#33B9AF"]}
                width={322}
                height={50}
                style={{ borderRadius: 100, paddingBottom: 10 }}
              >
                <Text style={styles.buttonText}>
                  {" "}
                  From $60,000 - $1,20,000 MXN
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 20}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("funding", { email: email.route.params.email});
                // handleFormSubmit("unlimited");
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#4E68E1", "#33B9AF"]}
                width={322}
                height={50}
                style={{ borderRadius: 100,paddingBottom:10 }}
              >
                <Text style={styles.buttonText}>Skip for Now</Text>
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
  Label1: {
    marginTop: 120,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    fontFamily: "NunitoSans_400Regular",
    lineHeight: 27,
    textAlign: "center",
  },
  Label2: {
    textAlign: "center",
    fontStyle: "normal",
    fontSize: 14,
    fontFamily: "NunitoSans_400Regular",
    color: "#7A869A",
  },
  buttonText: {
    color: "#ffff",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
  },
});
export default UserProfile;
