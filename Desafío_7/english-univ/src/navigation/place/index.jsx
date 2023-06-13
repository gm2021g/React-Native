import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";

import {
  MapsScreen,
  NewPlaceScreen,
  PlaceDetailScreen,
  PlaceListScreen,
} from "../screens/index";
import colors from "../utils/colors";

const Stack = createNativeStackNavigator();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Place"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? colors.primary : colors.secondary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={{ title: "New location" }}
      />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
