import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import StarRating from "react-native-star-rating";
import data from "../data/data";

const ProductList = () => {
  return (
    <View style={{ justifyContent: "space-around" }}>
      <Text style={styles.headertext}>POPÜLER ÜRÜNLER</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        contentContainerStyle={{ alignItems: "center" }}
        renderItem={({ item }) => (
          <View style={styles.Imagecontainer}>
            <Image source={{ uri: `${item.image_url}` }} style={styles.image} />
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              {item.product_name}{" "}
            </Text>
            <View style={styles.rating}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={item.star}
                starSize={16}
                fullStarColor="red"
              />
              <Text style={{ fontSize: 11, padding: 3 }}>{item.star}/5</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Imagecontainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  image: {
    width: 165,
    height: 220,
    margin: 10,
    borderRadius: 20,
  },
  headertext: {
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1,
    margin: 10,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 3,
  },
});

export default ProductList;
