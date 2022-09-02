import { Menu, Divider, Provider } from "react-native-paper";
import React from "react";
import { View, Image,TouchableOpacity, Alert } from "react-native";
// import onClickOutside from 'react-onclickoutside'

export default function BellMenu() {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  
  const closeMenu = () => setVisible(false);

  // BellMenu.handleClickOutside = () => setVisible(false);

  return (
    <Provider style={{ backgroundColor:'grey' }}>
      <View
        style={{
          paddingTop: 50,
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <Menu
          style={{top:60, width:150, left:122}}
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <View style={{ flexDirection: "row", top: -40, }}>
              <Image
                style={{ left: -100 }}
                source={require("../../assets/menuLogo.png")}
              />
              <TouchableOpacity
                style={{ right: 10, top: 5 }}
                onPress={() => {openMenu()}}
              >
                <Image source={require("../../assets/bell.png")} />
              </TouchableOpacity>
            </View>
          }
        >
          <Menu.Item onPress={() => {Alert.alert("Starting ...")}} title="Start" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Contact" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Nosotros" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Blog" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Enter my account" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Acquire Vadi Tokens" />
        </Menu>
      </View>
    </Provider>
  );
}

