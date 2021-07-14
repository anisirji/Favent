import React from "react";
import { Text, Image, View, Button, ScrollView, TextInput } from "react-native";
import styled from "styled-components";
import tailwind from "tailwind-rn";

const Div = styled.View`
  margin: 0;
`;

const ForgetPass = styled.Text`
  color: #2b81b4;
  position: absolute;
  font-size: 15px;
  bottom: 265px;
  right: 22px;
  font-weight: bold;
  font-style: normal;
`;

const LoginBtn = styled.Text`
  color: #fdfdfd;
  position: absolute;
  font-size: 22px;
  bottom: 215px;
  right: 159px;
  font-weight: 700;
  font-style: normal;
`;

const SignupBtn = styled.Text`
  color: #277eb4;
  position: absolute;
  font-size: 20px;
  bottom: 41px;
  right: 65px;
  font-weight: bold;
  font-style: normal;
`;

const EmailInput = styled.TextInput`
  position: absolute;
  font-size: 20px;
  bottom: 364px;
  left: 40px;
  font-weight: bold;
  font-style: normal;
`;

const PassInput = styled.TextInput`
  position: absolute;
  font-size: 20px;
  bottom: 295px;
  left: 40px;
  font-weight: bold;
  font-style: normal;
`;

const Login = ({ navigation }) => {
  return (
    <Div>
      <Image
        style={tailwind("w-full h-full")}
        source={require("../assets/Pages/Login.png")}
      />
      <ForgetPass onPress={() => navigation.push("Varify")}>
        Forgot Password ?
      </ForgetPass>
      <LoginBtn onPress={() => navigation.navigate("Home")}>Login</LoginBtn>
      <SignupBtn onPress={() => navigation.navigate("Signup")}>
        Signup
      </SignupBtn>
      <EmailInput placeholder="Email" />
      <PassInput placeholder="Password" />
    </Div>
  );
};

export default Login;
