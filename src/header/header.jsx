import React, { useCallback } from "react";
import { View, Text, Button, Linking } from "react-native";
import "react-native-gesture-handler";
import {
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

export default function CustomDrawerContent(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Start"
        labelStyle={{
          fontSize: 15,
          paddingTop: 5,
        }}
        onPress={() => Linking.openURL("https://vadi.com.mx/")}
      />
      <DrawerItem
        label="Contact Us"
        labelStyle={{
          fontSize: 15,
          paddingTop: 5,
        }}
        onPress={() => Linking.openURL("https://vadi.com.mx/#contacto")}
      />
      <DrawerItem
        label="Nosotros"
        labelStyle={{
          fontSize: 15,

          paddingTop: 5,
        }}
        onPress={() => Linking.openURL("https://vadi.com.mx/equipo/")}
      />
      <DrawerItem
        label="Blog"
        labelStyle={{
          fontSize: 15,
          paddingTop: 5,
        }}
        onPress={() => Linking.openURL("https://vadi.com.mx/blog/")}
      />
      <DrawerItem
        label="Enter my account"
        labelStyle={{
          fontSize: 15,

          paddingTop: 5,
        }}
        onPress={() => navigation.navigate("login")}
      />
      <DrawerItem
        label="Acquire Vadi Tokens"
        labelStyle={{
          fontSize: 15,
          paddingTop: 5,
        }}
        onPress={() => navigation.navigate("register")}
      />
       <DrawerItem
        label="Reset Password"
        labelStyle={{
          fontSize: 15,
          paddingTop: 5,
        }}
        onPress={() => navigation.navigate("resetPassword")}
      />
    </DrawerContentScrollView>
  );
}