import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  content: {
    width: "80%",
    maxWidth: 400,
    padding: 15,
    margin: 15,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    minHeight: 340,
  },
  title: {
    fontFamily: "Inter-Bold",
    fontSize: 20,
    alignItems: "stretch"
  },
});
