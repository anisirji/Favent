import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Pages/Home/home";
import LoginStackScreen from "./Navigation/LoginNav";
import HomeStackScreen from "./Navigation/Homenav";
import JobsStats from "./Pages/Home/jobStats";
import Favorite from "./Pages/Home/favorites";
import Settings from "./Pages/Home/settings";

const HomeTab = createBottomTabNavigator();
const HomeTabScreens = () => (
  <HomeTab.Navigator>
    <HomeTab.Screen name="Home" component={HomeStackScreen} />
    <HomeTab.Screen name="JobsStats" component={JobsStats} />
    <HomeTab.Screen name="Fav" component={Favorite} />
    <HomeTab.Screen name="Settings" component={Settings} />
  </HomeTab.Navigator>
);

export default () => (
  <NavigationContainer>
    <HomeTabScreens />
  </NavigationContainer>
);
