import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  Feather,
  Entypo,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Categories = () => {
  return (
    <View style={styles.container}>
      <View style={styles.categorycontainer}>
        <View>
          <View style={styles.categorybox}>
            <Feather name="smartphone" size={28} color="#00ffd5" />
          </View>
          <Text style={styles.text}>Telefon </Text>
        </View>
        <View>
          <View style={styles.categorybox}>
            <Foundation name="monitor" size={28} color="#00ffd5" />
          </View>
          <Text style={styles.text}>Monitör</Text>
        </View>

        <View>
          <View style={styles.categorybox}>
            <MaterialCommunityIcons name="keyboard" size={28} color="#00ffd5" />
          </View>
          <Text style={styles.text}>Klavye</Text>
        </View>

        <View>
          <View style={styles.categorybox}>
            <MaterialCommunityIcons
              name="headphones"
              size={28}
              color="#00ffd5"
            />
          </View>

          <Text style={styles.text}>Kulaklık</Text>
        </View>

        <View>
          <View style={styles.categorybox}>
            <Entypo name="print" size={28} color="#00ffd5" />
          </View>
          <Text style={styles.text}>Yazıcı</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 20,
  },
  text: {
    textAlign: "center",
    color: "#00ffd5",
  },
  categorycontainer: {
    width: WIDTH * 0.9,
    height: HEIGHT * 0.02,
    alignItems: "center",
    margin: 35,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  categorybox: {
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 5,
    backgroundColor: "#364365",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Categories;
