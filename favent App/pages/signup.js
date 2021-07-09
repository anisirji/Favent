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

const Signup = ({ navigation }) => {
  return (
    <View>
      <Text>Sign up</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default Signup;
