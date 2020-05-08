import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function Leaderboard({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam("name")}</Text>
      <Text>{navigation.getParam("rank")}</Text>
      <Text>{navigation.getParam("points")}</Text>
    </View>
  );
}
