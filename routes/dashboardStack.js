import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Dashboard from "../screens/dashboard";
import IndvChallenges from "../screens/indvChallenges";
import AllChallenges from "../screens/allChallenges";
import IndvPlayers from "../screens/indvPlayers";
import Leaderboard from "../screens/leaderboard";
import Updates from "../screens/updates";

const screens = {
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: "Dashboard",
    },
  },
  IndvChallenges: {
    screen: IndvChallenges,
    navigationOptions: {
      title: "Individual Challenges",
    },
  },
  AllChallenges: {
    screen: AllChallenges,
    navigationOptions: {
      title: "All Challenges",
    },
  },
  IndvPlayers: {
    screen: IndvPlayers,
    navigationOptions: {
      title: "Invidual Player",
    },
  },
  Leaderboard: {
    screen: Leaderboard,
    navigationOptions: {
      title: "Leaderboard",
    },
  },
  Updates: {
    screen: Updates,
    navigationOptions: {
      title: "Updates",
    },
  },
};

// home stack navigator screens
const DashboardStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 60 },
  },
});

export default createAppContainer(DashboardStack);
