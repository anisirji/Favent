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

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
      <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
    </View>
  );
};

export default Login;
