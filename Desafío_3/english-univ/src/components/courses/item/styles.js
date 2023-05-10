import { StyleSheet } from "react-native";
import { theme } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: "center",
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    marginVertical: 5,
  },
  item: {
    marginHorizontal: 10,
    color: theme.colors.black,
    fontSize: 20,
    fontFamily: "Ysabeau-Bold",
  },
});
