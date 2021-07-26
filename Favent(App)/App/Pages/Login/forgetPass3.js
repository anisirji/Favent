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

const ForgetPass3 = ({ navigation }) => {
  //Validating Form
  const ReviewForm = yup.object().shape({
    password: yup.string().required(),
    confirmPass: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match")
      .required(),
  });

  return (
    //Formik kind of collects all data from the form
    <Formik
      initialValues={{ password: "", confirmPass: "" }}
      validationSchema={ReviewForm}
      onSubmit={(values) => {
        //Jay & Yash you get "values" object onSubmit "SEE IN CONSOLE"
        console.log(values);
        alert("Your password has been changed, You are LoggedIn");
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
              Reset Your Password{" "}
            </Text>
            <Text style={globalstyles.profileCreationDiscription}>
              Enter the new password for your account and login.{" "}
            </Text>
            <View style={globalstyles.margin} />

            <View style={styles.container}>
              <Input
                secure={true}
                placeholder="Create New Password"
                onChangeText={formikProps.handleChange("password")}
                value={formikProps.values.password}
                onBlur={formikProps.handleBlur("password")}
              />
              <View style={globalstyles.errorContainer}>
                <Text style={globalstyles.errors}>
                  {formikProps.touched.password && formikProps.errors.password}
                </Text>
              </View>

              <Input
                secure={true}
                placeholder="Conform Password"
                onChangeText={formikProps.handleChange("confirmPass")}
                value={formikProps.values.confirmPass}
                onBlur={formikProps.handleBlur("confirmPass")}
              />
              <View style={globalstyles.errorContainer}>
                <Text style={globalstyles.errors}>
                  {formikProps.touched.confirmPass &&
                    formikProps.errors.confirmPass}
                </Text>
              </View>
              <View style={globalstyles.margin} />
              <Btn
                name="Reset and Login"
                bgColor={color.green}
                textColor={color.white}
                width={0.6}
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

export default ForgetPass3;
