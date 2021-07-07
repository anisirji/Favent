import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import tailwind from "tailwind-rn";

export default function App() {
  return (
    <View style={tailwind(" m-5 mt-9")}>
      <Text style={tailwind("text-red-500 text-4xl")}>Work done:- </Text>
      <Text style={tailwind("ml-7 p-3")}>
        1) Creating all environment for react-native app for Favent
      </Text>
      <Text style={tailwind("ml-7 p-3")}>
        2) Configuring important dependencies and libraries{" "}
      </Text>
      <Text style={tailwind("ml-7 p-3")}>3) Configured Tailwind Css </Text>

      <Text style={tailwind("text-red-500 text-4xl")}>Next release </Text>
      <Text style={tailwind("ml-7 p-3")}>
        1) Complete Login,Signup Forgot password page
      </Text>
      <Text style={tailwind("ml-7 p-3")}>
        2) Work on Profile Creation Part{" "}
      </Text>
      <Text style={tailwind("ml-7 p-3")}>3)Start with Homepage </Text>
      <StatusBar style="auto" />
    </View>
  );
}
