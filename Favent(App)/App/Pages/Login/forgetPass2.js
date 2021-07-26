import React from "react";
import {
  Text,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

//Custom Components
import Input from "../../Components/Input";
import color from "../../../assets/color";
import Btn from "../../Components/Button";

//Global Styles
import globalstyles from "../../../Global Styles/globalStylesheet";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const ForgetPass2 = ({ navigation }) => {
  //Validating Form
  const ReviewForm = yup.object().shape({
    otp: yup.string().required(),
  });

  return (
    //Formik kind of collects all data from the form
    <Formik
      initialValues={{ otp: "" }}
      validationSchema={ReviewForm}
      onSubmit={(values) => {
        //Jay & Yash you get "values" object onSubmit "SEE IN CONSOLE"
        console.log(values);
        navigation.navigate("ForgetPass3");
      }}
    >
      {(formikProps) => (
        //Dismissing Keyboard on click anywere on screen
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.main}>
            <Image
              style={styles.bg}
              source={require("../../../assets/Images/Backgrounds/forgetBg.png")}
            />

            <Image
              style={globalstyles.smallLogo}
              source={require("../../../assets/Images/logoSm.png")}
            />
            <Text style={globalstyles.profileCreationTitles}>
              Verify Your Account
            </Text>
            <Text style={globalstyles.profileCreationDiscription}>
              Please Enter One Time Password (OTP) sent to your email account.
            </Text>
            <View style={globalstyles.margin} />

            <View style={styles.container}>
              <Input
                placeholder="Enter OTP"
                keyboardType="numeric"
                onChangeText={formikProps.handleChange("otp")}
                value={formikProps.values.otp}
                onBlur={formikProps.handleBlur("otp")}
              />
              <View style={globalstyles.errorContainer}>
                <Text style={globalstyles.errors}>
                  {formikProps.touched.otp && formikProps.errors.otp}
                </Text>
              </View>
              <View style={globalstyles.margin} />
              <Btn
                name="Validate"
                bgColor={color.green}
                textColor={color.white}
                width={0.5}
                onPress={formikProps.handleSubmit}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </Formik>
  );
};

//Styles
const styles = StyleSheet.create({
  main: {
    height: Dimensions.get("window").height,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  bg: {
    position: "absolute",
    height: Dimensions.get("window").height,
  },
});

export default ForgetPass2;
