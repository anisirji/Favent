import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import globalstyles from "../../Global Styles/globalStylesheet";

const RoundBtn = () => {
  return (
    <TouchableOpacity>
      <View style={globalstyles.circleBtnShadow}>
        <View style={globalstyles.circleBtn}>
          <Text style={globalstyles.circleBtnName}>+</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RoundBtn;
