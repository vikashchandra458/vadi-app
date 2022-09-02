import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
const PrivacyNotice = () => {
  let [fontsLoad, error] = useFonts({
    NunitoSans_400Regular,
  });
  if (!fontsLoad) {
    return null;
  }
  return (
    <>
      <Text style={[styles.modalLevel, { color: "grey" }]}>
        Yet not attached.
      </Text>
    </>
  );
};

export default PrivacyNotice;

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
});
