import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

const Div = styled.View`
  background-color: red;
  margin: auto;
`;
const Title = styled.Text`
  color: green;
  font-family: Roboto;
  font-weight: 500;
  font-size: 100px;
`;

const Para = styled.Text`
  color: gray;
  font-family: Roboto;
  font-size: 50px;
`;
export { Para, Title, Div };
