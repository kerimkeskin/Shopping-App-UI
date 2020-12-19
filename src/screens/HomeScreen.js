import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import CategoriesCard from "../components/CategoriesCard";
import CategoriesBox from "../components/CategoriesBox";
import ProductList from "../components/ProductList";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.bar}>
        <Header />
        <SearchBox />
        <CategoriesCard />
      </SafeAreaView>
      <ProductList route={props.navigation} />
      <CategoriesBox />
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
