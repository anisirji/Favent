import React from "react";
import { Text, Image, View, Button, ScrollView, TextInput } from "react-native";
import styled from "styled-components";
import tailwind from "tailwind-rn";

const Div = styled.View`
  margin: 0;
`;

const VarifyBtn = styled.Text`
  color: #fdfdfd;
  position: absolute;
  font-size: 22px;
  bottom: 263px;
  left: 80px;
  font-weight: 600;
  font-style: normal;
`;

const EmailInput = styled.TextInput`
  position: absolute;
  font-size: 20px;
  bottom: 344px;
  left: 60px;
  font-weight: bold;
  font-style: normal;
`;

const Varify = ({ navigation }) => {
  return (
    <Div>
      <Image
        style={tailwind("w-full h-full")}
        source={require("../../assets/Pages/varify.png")}
      />

      <VarifyBtn onPress={() => navigation.push("Validate")}>Varify</VarifyBtn>

      <EmailInput placeholder="Email" />
    </Div>
  );
};

export default Varify;
