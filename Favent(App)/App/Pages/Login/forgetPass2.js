import React from "react";
import { Button, Text, View } from "react-native";

const ForgotPass2 = ({ navigation }) => {
  return (
    <View>
      <Text>ForgotPass2</Text>
      <Button
        title="Validate"
        onPress={() => navigation.navigate("ForgetPass3")}
      />
    </View>
  );
};

export default ForgotPass2;
