import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function IndvChallenges({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("points")}</Text>
      <Text>{navigation.getParam("body")}</Text>
    </View>
  );
}
