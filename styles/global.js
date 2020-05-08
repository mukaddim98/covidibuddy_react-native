import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    padding: 20,
    margin: 10,
    backgroundColor: "red",
  },
  outerContainer: {
    flex: 2,
    padding: 20,
    backgroundColor: "yellow",
  },
});
