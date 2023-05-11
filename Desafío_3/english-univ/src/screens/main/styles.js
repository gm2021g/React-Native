import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: theme.colors.white,
    marginVertical: 5,
    marginLeft: 290,
    textAlign: "center",
    width: 85,
    height: 30,
    //  fontFamily: "Ysabeau-Bold",
    fontSize: 20,
  },
});
