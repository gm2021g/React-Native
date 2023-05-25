import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { COLORS } from "../../constants";
import { Categories, Course, Courses } from "../../screens";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontFamily: "Inter-Bold",
        },
      }}>
      <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
      <Stack.Screen
        name="Courses"
        component={Courses}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: route.params.color,
          },
        })}
      />
      <Stack.Screen
        name="Course"
        component={Course}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
