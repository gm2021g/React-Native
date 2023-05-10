import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: "Ysabeau-ExtraBold",
    marginBottom: 20,
  },
  detailContainer: {
    paddingVertical: 20,
  },
  detailMessage: {
    fontSize: 22,
    color: theme.colors.text,
    textAlign: "center",
    fontFamily: "Ysabeau-ExtraBold",
  },
  selectedCourse: {
    fontSize: 20,
    color: theme.colors.text,
    fontWeight: "bold",
    paddingVertical: 20,
    paddingHorizontal: 20,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Ysabeau-Bold",
  },
  buttonContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
