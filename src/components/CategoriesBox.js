import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CategoriesBox = () => {
  return (
    <View>
      <Text style={styles.header}>KATEGORİLER</Text>

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
});

export default CategoriesBox;
