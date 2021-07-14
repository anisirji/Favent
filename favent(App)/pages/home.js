import React from "react";
import { Text, Image, View, Button, ScrollView, TextInput } from "react-native";
import styled from "styled-components";
import tailwind from "tailwind-rn";

const Div = styled.View`
  margin-left: 0px;
`;

const Home = ({ navigation }) => {
  return (
    <Div>
      <Image
        style={tailwind(" h-full")}
        source={require("../assets/Pages/Home.png")}
      />
    </Div>
  );
};

export default Home;
