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

export default function LeaderboardSnippet({ navigation }) {
  const [player, setPlayer] = useState([
    {
      name: "Player 1",
      points: 300,
      rank: 1,
      key: uuid(),
    },
    {
      name: "Player 2",
      points: 200,
      rank: 2,
      key: uuid(),
    },
    {
      name: "Player 3",
      points: 100,
      rank: 3,
      key: uuid(),
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={player}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Leaderboard", item)}
          >
            <Text style={globalStyles.titleText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
