import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.bar}>
        <Header />
        <SearchBox />
        <Categories />
      </SafeAreaView>
      <ProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bar: {
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    backgroundColor: "#151c36",
  },
});
export default HomeScreen;
