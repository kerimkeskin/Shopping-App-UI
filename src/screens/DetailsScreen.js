import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const DetailsScreen = ({ route }) => {
  const { image } = route.params;

  return (
    <View>
      <View>
        <Image
          resizeMode="stretch"
          source={{ uri: image }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Width,
    height: Height * 0.4,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
});

export default DetailsScreen;
