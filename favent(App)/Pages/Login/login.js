import React from "react";
import { Button, Text, View } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
      <Button title="Login" onPress={navigation.navigate("Home")} />
      <Button title="Forget Pass" onPress={navigation.navigate("Varify")} />
      <Button title="signup" onPress={navigation.navigate("Signup")} />
      <Button
        title="Signin with Google"
        onPress={navigation.navigate("Home")}
      />
      <Button
        title="Signup with Facebook"
        onPress={navigation.navigate("Home")}
      />
    </View>
  );
};

export default Login;
