import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";
import tailwind from "tailwind-rn";
import Nav from "./nav";

export default function App() {
  return <Nav />;
}

const style = StyleSheet.create({
  login: {
    padding: 10,
    backgroundColor: "#0E477E",
    color: "red",
  },
});
