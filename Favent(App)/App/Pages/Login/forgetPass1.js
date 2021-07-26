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

const ForgetPass1 = ({ navigation }) => {
  //Validating Form
  const ReviewForm = yup.object().shape({
    username: yup.string().email().required(),
  });

  return (
    //Formik kind of collects all data from the form
    <Formik
      initialValues={{ username: "" }}
      validationSchema={ReviewForm}
      onSubmit={(values) => {
        //Jay & Yash you get "values" object onSubmit SEE IN CONSOLE
        console.log(values);
        navigation.navigate("ForgetPass2");
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
              Please Enter your associated Email Id to varify your account.
            </Text>
            <View style={globalstyles.margin} />

            <View style={styles.container}>
              <Input
                placeholder="Email Id"
                onChangeText={formikProps.handleChange("username")}
                value={formikProps.values.username}
                onBlur={formikProps.handleBlur("username")}
              />
              <View style={globalstyles.errorContainer}>
                <Text style={globalstyles.errors}>
                  {formikProps.touched.username && formikProps.errors.username}
                </Text>
              </View>
              <View style={globalstyles.margin} />
              <Btn
                name="Send OTP"
                bgColor={color.darkBlue}
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

export default ForgetPass1;
