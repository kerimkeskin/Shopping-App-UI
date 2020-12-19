import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const CategoriesBox = () => {
  return (
    <View >
      <Text style={styles.header}>KATEGORİLER</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryContainer}
      >
        <View style={styles.category}>
          <Entypo style={styles.icon} name="camera" size={22} color="#00ffd5" />
          <Text style={styles.text}>Kamera</Text>
        </View>
        <View style={styles.category}>
          <Entypo
            style={styles.icon}
            name="game-controller"
            size={24}
            color="#00ffd5"
          />
          <Text style={styles.text}>Konsollar</Text>
        </View>
        <View style={styles.category}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="headphones"
            size={28}
            color="#00ffd5"
          />
          <Text style={styles.text}>Konsollar</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomtabcontainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
    margin: 10,
  },
  categoryContainer: {
    height: 50,
  },
  category: {
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    width: 140,
    height: 30,
    backgroundColor: "#384265",
    borderRadius: 20,
  },
  icon: {
    marginHorizontal: 15,
  },
  text: {
    color: "#00ffd5",
  },
  bottomtabcontainer: {
    width: "100%",
    height:120
  },
});

export default CategoriesBox;
