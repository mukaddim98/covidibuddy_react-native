import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Dashboard from "../screens/dashboard";
import Challenges from "../screens/challenges";

const screens = {
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: "Dashboard",
    },
  },
  Challenges: {
    screen: Challenges,
    navigationOptions: {
      title: "Challenges",
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