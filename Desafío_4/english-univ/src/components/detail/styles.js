import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: theme.colors.grey,
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  detail: {
    fontSize: 18,
    color: theme.colors.black,
    alignContent: "center",
    marginLeft: 2,
    fontFamily: "Ysabeau-Bold",
  },
});
