import { useState } from "react";
import { useFonts } from "expo-font";
import { Cart, Main } from "./screens/index";
import { View, ActivityIndicator } from "react-native";
import { theme } from "./constants";

export default function App() {
  const [loaded] = useFonts({
    "Ysabeau-Regular": require("../assets/fonts/Ysabeau-Regular.ttf"),
    "Ysabeau-Bold": require("../assets/fonts/Ysabeau-Bold.ttf"),
    "Ysabeau-SemiBold": require("../assets/fonts/Ysabeau-SemiBold.ttf"),
    "Ysabeau-Black": require("../assets/fonts/Ysabeau-Black.ttf"),
    "Ysabeau-ExtraBold": require("../assets/fonts/Ysabeau-ExtraBold.ttf"),
    "Ysabeau-ExtraLight": require("../assets/fonts/Ysabeau-ExtraLight.ttf"),
    "Ysabeau-Light": require("../assets/fonts/Ysabeau-Light.ttf"),
    "Ysabeau-Medium": require("../assets/fonts/Ysabeau-Medium.ttf"),
    "Ysabeau-Thin": require("../assets/fonts/Ysabeau-Thin.ttf"),
  });

  /*
  if (!loaded) {
    return (
      <View>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }
  */

  const [cart, setCart] = useState(false);

  const onSetCart = (value) => {
    setCart(value);
  };

  const ViewScreen = () => (cart ? <Cart /> : <Main onSetCart={onSetCart} />);

  return <ViewScreen />;
}
