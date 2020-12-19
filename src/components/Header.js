import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
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
        <Image
          source={{
            uri:
              "https://avatars1.githubusercontent.com/u/64541749?s=460&u=bc03569ad4c194a4da2248f681d93716475e297e&v=4",
          }}
          style={styles.pp}
        />
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
    fontWeight: "bold",
    letterSpacing: 1,
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
