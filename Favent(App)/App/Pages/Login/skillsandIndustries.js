import React from "react";
import { Button, Text, View } from "react-native";

const SkillsAndIndustries = ({ navigation }) => {
  return (
    <View>
      <Text>SkillsAndIndustries</Text>
      <Button
        title="Continue"
        onPress={() => navigation.navigate("Qualification")}
      />
    </View>
  );
};

export default SkillsAndIndustries;
