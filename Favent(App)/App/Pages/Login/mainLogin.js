import React from "react";
import { View, ScrollView, Text, Dimensions } from "react-native";
import Signup from "./signup";
import Details from "./details";
import SkillAndIndustry from "./skillsandIndustries";
import Resume from "./resume";
import Login from "./login";
import Qualification from "./qualification";
import WorkExp from "./workExp";

const LoginWizard = () => {
  let screenWidth = Dimensions.get("window").width;
  let screenHeight = Dimensions.get("window").height;

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ backgroundColor: "green", marginTop: 70 }}>
        <Text style={{ color: "green" }}>
          There will be the status bar.....Or Progressbar
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
            width: screenWidth,
            height: screenHeight,
            marginTop: 10,
          }}
        >
          <Login />
        </View>
        <View
          style={{
            flex: 1,
            width: screenWidth,
            height: screenHeight,
            marginTop: 10,
          }}
        >
          <Signup />
        </View>
        <View
          style={{
            flex: 1,
            width: screenWidth,
            height: screenHeight,
            marginTop: 10,
          }}
        >
          <Details />
        </View>
        <View
          style={{
            flex: 1,
            width: screenWidth,
            height: screenHeight,
            marginTop: 10,
          }}
        >
          <Qualification />
        </View>
        <View
          style={{
            flex: 1,
            width: screenWidth,
            height: screenHeight,
            marginTop: 10,
          }}
        >
          <WorkExp />
        </View>
        <View
          style={{
            flex: 1,
            width: screenWidth,
            height: screenHeight,
            marginTop: 10,
          }}
        >
          <SkillAndIndustry />
        </View>
        <View
          style={{
            flex: 1,
            width: screenWidth,
            height: screenHeight,
            marginTop: 10,
          }}
        >
          <Resume />
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginWizard;
