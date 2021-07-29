import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Text,
  Image,
} from "react-native";
import color from "../../assets/color";

export default function ModalInput(props) {
  const [focus, setFocus] = React.useState(props.focus);

  return (
    <View style={{ marginVertical: 2.5 }}>
      <View
        style={[
          {
            display: "flex",
            borderRadius: 5,
            justifyContent: "center",
            padding: 1,
            alignItems: "center",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: color.lightBlue,
            width: screenWidth * 0.9,
            backgroundColor: "white",
            padding: 5,
            height: props.height,
          },
          props.style,
          focus ? chamki.focused : chamki.notFocused,
        ]}
      >
        <View
          style={{
            flexDirection: props.flexDirection,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image source={props.source} />
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
            multiline={props.multiline}
            numberOfLines={props.lines}
          />
        </View>
      </View>
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
  inputStyle: {
    flex: 1,
  },
});
