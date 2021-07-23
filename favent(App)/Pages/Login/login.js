import React from "react";
import { Button, Text, ScrollView } from "react-native";

const Login = ({ navigation }) => {
  return (
    <ScrollView>
      <Text>Login</Text>
      <Button title="Login" onPress={() => navigation.navigate("Main")} />
      <Button title="Forget Pass" onPress={navigation.push("Varify")} />
      <Button title="signup" onPress={navigation.navigate("Signup")} />
      <Button
        title="Signin with Google"
        onPress={navigation.navigate("Home")}
      />
      <Button
        title="Signup with Facebook"
        onPress={navigation.navigate("Home")}
      />
    </ScrollView>
  );
};

export default Login;
