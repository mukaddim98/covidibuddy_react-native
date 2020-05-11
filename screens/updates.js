import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { globalStyles } from "../styles/global";
import { v4 as uuid } from "uuid";

export default function Updates() {
  const [updates, setUpdates] = useState([
    {
      title: "Update 1",
      body: "Update 1 details",
      key: uuid(),
    },
    {
      title: "Update 2",
      body: "Update 2 details",
      key: uuid(),
    },
    {
      title: "Update 3",
      body: "Update 3 details",
      key: uuid(),
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={player}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
