import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function UpdatesSnippet({ navigation }) {
  return (
    <TouchableOpacity style={globalStyles.container}>
      <View>
        <Text style={globalStyles.titleText}>Hola</Text>
      </View>
    </TouchableOpacity>
  );
}
