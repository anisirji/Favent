import React from "react";
import { Text, Image, View, Button, ScrollView, TextInput } from "react-native";
import styled from "styled-components";
import tailwind from "tailwind-rn";

const Div = styled.View`
  margin: 0;
`;

const ValidateBtn = styled.Text`
  color: #fdfdfd;
  position: absolute;
  font-size: 22px;
  bottom: 263px;
  left: 70px;
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

const Validate = ({ navigation }) => {
  return (
    <Div>
      <Image
        style={tailwind("w-full h-full")}
        source={require("../../assets/Pages/Validate.png")}
      />

      <ValidateBtn onPress={() => navigation.push("Reset")}>
        Validate
      </ValidateBtn>

      <EmailInput placeholder="Otp" />
    </Div>
  );
};

export default Validate;
