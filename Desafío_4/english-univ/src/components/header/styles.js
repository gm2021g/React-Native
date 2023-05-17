import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: theme.colors.primary,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    color: theme.colors.white,
    fontFamily: "Ysabeau-Bold",
  },
});
