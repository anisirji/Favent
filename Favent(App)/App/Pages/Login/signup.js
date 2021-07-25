import React from "react";
import { Button, Text, View } from "react-native";

const Signup = ({ navigation }) => {
  return (
    <View>
      <Text>Signup</Text>
      <Button title="Signup" onPress={() => navigation.navigate("Details")} />
      <Button
        title="Back To Signin"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default Signup;
