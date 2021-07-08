import { StatusBar } from "expo-status-bar";
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

const Logo = require("./assets/logo.png"),
  Bg = require("./assets/img.jpeg"),
  Login = require("./assets/login.png");

export default function App() {
  return (
    <View>
      <Image source={Login} style={tailwind("w-full h-full")} />
      {/*<Image source={Bg} style={tailwind("absolute opacity-30 mr-72")} />
      
      <View style={tailwind("flex flex-col items-center")}>
        <Image source={Logo} style={tailwind(" ml-10 mt-10 mr-10 ")} />
        <Text style={tailwind("text-3xl text-blue-900 font-bold mt-3")}>
          FAVENT
        </Text>
        <Text style={tailwind("text-lg text-blue-600")}>
          Find Your Perfect Job
        </Text>
        <Text style={tailwind("text-4xl font-bold mt-5")}>Welcome Back !</Text>
        <Text> Email Id</Text>
        <TextInput
          defaultValue="Email Id"
          style={tailwind("border-2 rounded-md bg-white p-2 w-4/5")}
        />
        <Text>Password</Text>
        <TextInput
          defaultValue="Password"
          style={tailwind("border-2 rounded-md bg-white p-2 w-4/5")}
        />
        <Text>Forget Passsword ?</Text>
        <Button title="Login" style={style.login} />
      </View>
      <Text>
        Or <Text>connect Using</Text>
      </Text>
      <View style={tailwind("flex justify-around ")}>
        <Button title="Google" />
        <Button title="Facebook" />
      </View>
      <Text>
        Don't have an account ? <Text>Sign up</Text>
      </Text>
     */}
    </View>
  );
}

{
  /*const style = StyleSheet.create({
  login: {
    padding: 10,
    backgroundColor: "#0E477E",
    color: "red",
  },
});*/
}
