import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import StarRating from "react-native-star-rating";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const DetailsScreen = ({ route }) => {
  const { image_url, star, product_name, price, description } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: "#151c36" }}>
      <View
        style={{
          backgroundColor: "white",
          height: Height * 0.75,
          borderRadius: 40,
        }}
      >
        <View style={styles.imagecontainer}>
          <Image
            resizeMode="stretch"
            source={{ uri: image_url }}
            style={styles.image}
          />
          <View style={styles.iconcontainer}>
            <FontAwesome
              style={styles.bottomicon}
              name="heart"
              size={30}
              color="#384265"
            />
          </View>
        </View>
        <View style={styles.headercontainer}>
          <Text style={styles.headertext}>{product_name}</Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={star}
              starSize={12}
              fullStarColor="red"
            />
          </View>
        </View>
        <Text style={[styles.headertext, { fontSize: 30 }]}>{price} ₺ </Text>
        <Text style={[styles.headertext, { textAlign: "justify", margin: 10 }]}>
          Açıklama
        </Text>
        <Text
          style={[
            styles.headertext,
            {
              fontSize: 10,
              fontWeight: "400",
              textAlign: "justify",
              margin: 10,
            },
          ]}
        >
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagecontainer: {
    height: Height * 0.4 + 25,
  },
  image: {
    width: Width,
    height: Height * 0.4,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  iconcontainer: {
    position: "absolute",
    right: 25,
    bottom: 0,
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5.46,
    elevation: 9,
  },
  headercontainer: {
    justifyContent: "center",
    margin: 3,
  },
  headertext: {
    fontWeight: "900",
    letterSpacing: 1,
    textAlign: "center",
    color: 32,
    color: "black",
  },
});

export default DetailsScreen;
