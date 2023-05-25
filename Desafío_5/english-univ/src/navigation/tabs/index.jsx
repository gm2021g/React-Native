import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRef, useEffect } from "react";
import { Animated } from "react-native";

import { COLORS } from "../../constants";
import CartNavigator from "../cart";
import HomeNavigator from "../home";
import OrdersNavigator from "../orders";
import SearchNavigator from "../search";

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const tabIconAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    tabIconAnimation();
  }, [tabIconAnimation]);
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "Inter-Regular",
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: COLORS.primary,
        },
        tabBarActiveTintColor: COLORS.text,
        tabBarInactiveTintColor: COLORS.darkGray,
        tabBarIconStyle: {
          fontSize: 22,
        },
      }}>
      <BottomTab.Screen
        name="HomaTab"
        component={HomeNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <Animated.View style={{ opacity: animatedValue }}>
              <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
            </Animated.View>
          ),
        }}
      />

      <BottomTab.Screen
        name="SearchTab"
        component={SearchNavigator}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "md-search-circle" : "md-search-circle-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "file-tray" : "file-tray-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? "cart" : "cart-outline"} size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
