import React from "react";
import { Button, Text, View } from "react-native";

const ForgotPass1 = ({ navigation }) => {
  return (
    <View>
      <Text>ForgotPass1</Text>
      <Button
        title="Send Otp"
        onPress={() => navigation.navigate("ForgetPass2")}
      />
    </View>
  );
};

export default ForgotPass1;
