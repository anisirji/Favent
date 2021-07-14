import React from "react";
import { Text, Image, View, Button, ScrollView, TextInput } from "react-native";
import styled from "styled-components";
import tailwind from "tailwind-rn";

const Div = styled.View`
  margin: 0;
`;

const ResetBtn = styled.Text`
  color: #fdfdfd;
  position: absolute;
  font-size: 22px;
  bottom: 170px;
  right: 159px;
  font-weight: 600;
  font-style: normal;
`;

const Reset = ({ navigation }) => {
  return (
    <Div>
      <Image
        style={tailwind("w-full h-full")}
        source={require("../../assets/Pages/Reset.png")}
      />
      <ResetBtn>Reset and Login</ResetBtn>
    </Div>
  );
};

export default Reset;
