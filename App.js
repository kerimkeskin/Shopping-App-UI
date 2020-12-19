import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Navigator from "./src/navigation/Navigator";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
