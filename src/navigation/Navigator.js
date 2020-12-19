import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: "Ürün Detayları",
            headerStyle: {
              backgroundColor: "#151c36",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerBackTitleVisible: false,
            headerTitleStyle: { color: "white" },
            headerTintColor: "#00ffd5",
            headerRight: () => (
              <TouchableOpacity>
                <FontAwesome5
                  style={{ marginHorizontal: 20 }}
                  name="shopping-cart"
                  size={24}
                  color="#00ffd5"
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
