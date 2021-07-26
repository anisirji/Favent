/* Properties
placeHolder, isPass, size, Icon:True, icnSrc = "./Image.icon.jpg",
icondirection:right,isTransparent: true
*/

import React from "react";
import { View, TextInput, StyleSheet, Dimensions, Text } from "react-native";
import color from "../../assets/color";

export default function Input(props) {
  const [focus, setFocus] = React.useState(props.focus);

  return (
    <View
      style={[
        chamki.container,
        props.style,
        focus ? chamki.focused : chamki.notFocused,
      ]}
    >
      <TextInput
        setFocus={focus}
        onChangeText={props.onChangeText}
        value={props.value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        secureTextEntry={props.secure}
        style={chamki.textInput}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
      />
    </View>
  );
}
let screenWidth = Dimensions.get("window").width;

const chamki = StyleSheet.create({
  focused: {
    fontFamily: "Roboto",
    fontSize: 15,
    color: color.darkGray,
    backgroundColor: color.white,
    borderColor: color.blue,
    borderWidth: 1,
    fontWeight: "bold",
  },
  textInput: {
    borderRadius: 5,
    paddingLeft: 15,
    fontFamily: "Roboto",
    width: screenWidth * 0.8,
    borderColor: "white",
    backgroundColor: "white",
    marginLeft: 0,
    height: 36,
  },
  notFocused: {
    fontFamily: "Roboto",
    borderColor: color.darkBlue,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "center",
    padding: 1,
    alignItems: "center",
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.lightBlue,
    width: screenWidth * 0.9,
    backgroundColor: "white",
    padding: 5,
  },
  inputStyle: {
    flex: 1,
  },
});
