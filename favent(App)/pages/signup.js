import React from "react";
import { Text, Image, View, Button, ScrollView, TextInput } from "react-native";
import styled from "styled-components";
import tailwind from "tailwind-rn";

const Div = styled.View`
  margin: 0;
`;

const LoginBtn = styled.Text`
  color: #277eb4;
  position: absolute;
  font-size: 17px;
  bottom: 148px;
  right: 50px;
  font-weight: bold;
  font-style: normal;
`;
const ContinueBtn = styled.Text`
  color: #fdfdfd;
  position: absolute;
  font-size: 22px;
  bottom: 310px;
  left: 140px;
  font-weight: 600;
  font-style: normal;
`;

const Signup = ({ navigation }) => {
  return (
    <Div>
      <Image
        style={tailwind("w-full h-full")}
        source={require("../assets/Pages/Signup.png")}
      />

      <ContinueBtn onPress={() => navigation.navigate("Home")}>
        Continue
      </ContinueBtn>
      <LoginBtn onPress={() => navigation.navigate("Login")}>Login</LoginBtn>
    </Div>
  );
};

export default Signup;
