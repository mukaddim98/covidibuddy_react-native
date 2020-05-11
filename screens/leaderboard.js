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

export default function Leaderboard({ navigation }) {
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
    {
      name: "Player 4",
      points: 300,
      rank: 4,
      key: uuid(),
    },
    {
      name: "Player 5",
      points: 200,
      rank: 5,
      key: uuid(),
    },
    {
      name: "Player 6",
      points: 100,
      rank: 6,
      key: uuid(),
    },
    {
      name: "Player 7",
      points: 300,
      rank: 7,
      key: uuid(),
    },
    {
      name: "Player 8",
      points: 200,
      rank: 8,
      key: uuid(),
    },
    {
      name: "Player 9",
      points: 100,
      rank: 9,
      key: uuid(),
    },
  ]);

  return (
    <TouchableOpacity style={globalStyles.container}>
      <FlatList
        data={player}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("IndvPlayers", item)}
          >
            <Text style={globalStyles.titleText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </TouchableOpacity>
  );
}
