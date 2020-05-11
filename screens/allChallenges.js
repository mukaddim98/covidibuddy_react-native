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

export default function AllChallenges({ navigation }) {
  const [challenge, setChallenge] = useState([
    {
      title: "Challenge 1",
      points: 100,
      body: "Challenge 1 description",
      key: uuid(),
    },
    {
      title: "Challenge 2",
      points: 100,
      body: "Challenge 2 description",
      key: uuid(),
    },
    {
      title: "Challenge 3",
      points: 100,
      body: "Challenge 3 description",
      key: uuid(),
    },
    {
      title: "Challenge 4",
      points: 100,
      body: "Challenge 4 description",
      key: uuid(),
    },
    {
      title: "Challenge 5",
      points: 100,
      body: "Challenge 5 description",
      key: uuid(),
    },
    {
      title: "Challenge 6",
      points: 100,
      body: "Challenge 6 description",
      key: uuid(),
    },
  ]);

  return (
    <TouchableOpacity style={globalStyles.container}>
      <FlatList
        data={challenge}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("IndvChallenges", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </TouchableOpacity>
  );
}
