import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    marginVertical: 20,
  },
  title: {
    fontSize: 25,
    color: theme.colors.text,
    paddingVertical: 8,
    paddingHorizontal: 20,
    textAlign: "left",
    marginBottom: 20,
    fontFamily: "Ysabeau-Bold",
  },
});
