import { theme } from "@//theme";
import { fontFamily } from "@//theme/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  title: {
    fontSize: 14,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
  image: {
    // width: "100%",
    // height: 200,
    borderRadius: 22,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 7,
  },
});
