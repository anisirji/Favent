import React from "react";
import { Text, View, Button } from "react-native";

const Home = (props) => {
  // const pressHandeler = () => {
  //   //props.navigation.navigate("Login");
  //   props.navigation.push("Login");
  // };
  return (
    <View>
      <Text>Its Home Page</Text>
      <Button title="Login" onPress={() => props.navigation.push("Login")} />
      <Text></Text>
      <Button title="Signup" onPress={() => props.navigation.push("Signup")} />
    </View>
  );
};

export default Home;
