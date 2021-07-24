import React from "react";
import { Button, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  //const navigation = useNavigation();
  return (
    <ScrollView>
      <Text>Login</Text>
      <Button title="Login" />
      <Button
        title="Forget Pass"
        onPress={() => navigation.navigate("ForgetPass1")}
      />
      <Button title="signup" />
      <Button title="Signin with Google" />
      <Button title="Signup with Facebook" />
    </ScrollView>
  );
};

export default Login;
