/* Properties
    Text color, Placeholder, Onpress, size: sm/lg,
    w-full/not, clickAniation = istrue,
    add more styles flexiblity, bgColor
 */

//bgColor, textColor, width

import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react/cjs/react.production.min";

export default function Btn(props) {
  let screenWidth = Dimensions.get("window").width;
  let opacity;
  if (props.disabled) {
    opacity = 0.6;
  } else {
    opacity = 1;
  }
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <View
        style={{
          backgroundColor: props.bgColor,
          width: screenWidth * props.width,
          padding: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          height: 50,
          borderRadius: 100,
          opacity: opacity,
          // shadowColor: "black",
          // shadowOffset: { width: 0, height: 2 },
          // shadowOpacity: 0.4,
          // elevation: 10,
        }}
      >
        {props.children}
        {/* <Image source={require("../../assets/icon.png")} height={5} /> */}
        <Text
          style={{
            color: props.textColor,
            fontFamily: "Roboto",
            fontWeight: "600",
            fontSize: 17,
            fontStyle: "normal",
            borderRadius: 100,
          }}
        >
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
