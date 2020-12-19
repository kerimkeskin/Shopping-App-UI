import React from "react";
import { StyleSheet, TextInput, View, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const SearchBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchbox}>
        <AntDesign
          style={styles.searchicon}
          name="search1"
          size={24}
          color="gray"
        />
        <TextInput style={styles.textinput} placeholder="Ara" />
        <View style={styles.iconcontainer}>
          <MaterialIcons
            style={{ margin: 6 }}
            name="keyboard-voice"
            size={24}
            color="gray"
          />
          <Entypo style={{ margin: 6 }} name="camera" size={24} color="gray" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  searchbox: {
    width: WIDTH * 0.9,
    height: HEIGHT * 0.06,
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 15,
  },
  textinput: {
    width: WIDTH * 0.6,
    height: HEIGHT * 0.05,
  },
  searchicon: {
    alignItems: "flex-start",
    marginHorizontal: 10,
  },
  iconcontainer: {
    flexDirection: "row",
  },
});

export default SearchBox;
