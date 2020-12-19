import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>ANA SAYFA</Text>
      <View style={styles.header}>
        <AntDesign
          style={styles.icon}
          name="menu-unfold"
          size={32}
          color="#00ffd5"
        />
        <View style={styles.pp}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: HEIGHT * 0.13,
  },
  headertext: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    fontWeight:'bold',
    letterSpacing:1,
  
  },
  header: {
    width: WIDTH,
    height: HEIGHT * 0.07,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: WIDTH * 0.2,
  },
  pp: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 90,
  },
});

export default Header;
