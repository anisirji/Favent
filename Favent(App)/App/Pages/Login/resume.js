import React from "react";
import { Button, Text, View, Image, Dimensions } from "react-native";
import Btn from "../../Components/Button";
import globalstyles from "../../../Global Styles/globalStylesheet";
import color from "../../../assets/color";

const Resume = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View>
      <Image
        style={globalstyles.smallLogo}
        source={require("../../../assets/Images/logoSm.png")}
      />

      <Text style={globalstyles.profileCreationDiscription}>
        Please upload your resume, It will help to find the right oppertunity
        for you{" "}
      </Text>
      <View style={{ alignSelf: "center" }}>
        <Image
          style={globalstyles.smallLogo}
          source={require("../../../assets/Images/Resume.png")}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: screenWidth * 0.05,
          top: Dimensions.get("window").height * 0.2,
        }}
      >
        <Btn
          // disabled={btn}
          name="Continue"
          bgColor={color.blue}
          textColor={color.white}
          width={0.45}
          onPress={() => alert("Welcome to home page")}
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

export default Resume;
