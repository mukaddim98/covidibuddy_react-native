import React from "react";
import { View } from "react-native";
import ChallengesSnippet from "../components/challengesSnippet";
import LeaderboardSnippet from "../components/leaderboardSnippet";
import { globalStyles } from "../styles/global";

export default function Dashboard({ navigation }) {
  return (
    <View style={globalStyles.outerContainer}>
      <ChallengesSnippet navigation={navigation} />
      <LeaderboardSnippet navigation={navigation} />
    </View>
  );
}
