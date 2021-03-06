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

export default function ChallengesSnippet({ navigation }) {
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
  ]);

  return (
    <TouchableOpacity
      style={globalStyles.container}
      onPress={() => navigation.navigate("AllChallenges")}
    >
      <TouchableOpacity>
        <Text
          style={globalStyles.titleText}
          onPress={() => navigation.navigate("AllChallenges")}
        >
          Challenges
        </Text>
      </TouchableOpacity>

      <FlatList
        data={challenge}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("IndvChallenges", item)}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </TouchableOpacity>
  );
}
