import React from "react";
import { Button, Text, View } from "react-native";

const ForgotPass3 = () => {
  return (
    <View>
      <Text>ForgotPass3</Text>
      <Button
        title="Reset and Login"
        onPress={() => alert("Password changed")}
      />
    </View>
  );
};

export default ForgotPass3;
