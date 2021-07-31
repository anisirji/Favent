import React from "react";
import { Button, Dimensions, Text, View } from "react-native";
import Btn from "../../Components/Button";
import color from "../../../assets/color";
import globalstyles from "../../../Global Styles/globalStylesheet";

const SkillsAndIndustries = ({ navigation }) => {
  const screenWidth = Dimensions.get("screen").width;

  return (
    <View>
      <Text>SkillsAndIndustries</Text>
      <View
        style={{
          position: "absolute",
          bottom: -500,
          flexDirection: "row",
          marginHorizontal: screenWidth * 0.05,
        }}
      >
        <Btn
          // disabled={btn}
          name="Continue"
          bgColor={color.blue}
          textColor={color.white}
          width={0.45}
          onPress={() => navigation.navigate("Resume")}
        />
        <Btn
          name="Skip"
          bgColor={color.lightGray}
          textColor={color.blue}
          width={0.45}
          onPress={() => alert("This will take you to the home page")}
        />
      </View>
    </View>
  );
};

export default SkillsAndIndustries;
