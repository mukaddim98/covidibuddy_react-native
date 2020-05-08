import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function Challenges({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("points")}</Text>
      <Text>{navigation.getParam("body")}</Text>
    </View>
  );
}
