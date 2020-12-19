import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";

const CategoriesBox = () => {
  return (
    <View>
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
      <View style={styles.bottomtabcontainer}>
        <View style={styles.bottomtab}>
          <Entypo
            style={styles.bottomicon}
            name="home"
            size={30}
            color="#00ffd5"
          />
          <FontAwesome5
            style={styles.bottomicon}
            name="shopping-cart"
            size={30}
            color="#384265"
          />
          <FontAwesome
            style={styles.bottomicon}
            name="heart"
            size={30}
            color="#384265"
          />
          <FontAwesome
            style={styles.bottomicon}
            name="user-circle"
            size={30}
            color="#384265"
          />
        </View>
      </View>
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
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomtab: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 30,
    backgroundColor: "#151c36",
    width: "90%",
    height: 70,
  },
  bottomicon: {
    marginHorizontal: 30,
  },
});

export default CategoriesBox;
