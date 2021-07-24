import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Pages/Home/home";
import JobsDescription from "../Pages/Home/jobDes";
import { Scheduled, Applied, Shortlisted } from "../Pages/Home/cards";

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Scheduled" component={Scheduled} />
    <HomeStack.Screen name="Applied" component={Applied} />
    <HomeStack.Screen name="Shortlisted" component={Shortlisted} />
    <HomeStack.Screen name="JobsDescription" component={JobsDescription} />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
