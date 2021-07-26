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

const Signup = ({ navigation }) => {
  //Validating Form
  const ReviewForm = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required(),
  });

  return (
    //Formik kind of collects all data from the form
    <Formik
      initialValues={{ username: "", password: "", confirmPassword: "" }}
      validationSchema={ReviewForm}
      onSubmit={(values) => {
        //Jay & Yash you get "values" object onSubmit SEE IN CONSOLE
        console.log(values);
        navigation.navigate("Details");
      }}
    >
      {(formikProps) => (
        //Dismissing Keyboard on click anywere on screen
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.main}>
            <Image
              style={styles.bg}
              source={require("../../../assets/Images/Backgrounds/SignupBg.png")}
            />

            <Image
              style={globalstyles.smallLogo}
              source={require("../../../assets/Images/logoSm.png")}
            />
            <Text style={globalstyles.profileCreationTitles}>Sign Up</Text>

            <View style={styles.container}>
              <Input
                placeholder="Email Id"
                onBlur={formikProps.handleBlur("username")}
                onChangeText={formikProps.handleChange("username")}
                value={formikProps.values.username}
              />
              <View style={globalstyles.errorContainer}>
                <Text style={globalstyles.errors}>
                  {formikProps.touched.username && formikProps.errors.username}
                </Text>
              </View>

              <Input
                onBlur={formikProps.handleBlur("password")}
                placeholder="Create Password"
                secure={true}
                onChangeText={formikProps.handleChange("password")}
                values={formikProps.password}
              />
              <View style={globalstyles.errorContainer}>
                <Text style={globalstyles.errors}>
                  {formikProps.touched.password && formikProps.errors.password}
                </Text>
              </View>

              <Input
                onBlur={formikProps.handleBlur("confirmPassword")}
                placeholder="Confirm Password"
                secure={true}
                onChangeText={formikProps.handleChange("confirmPassword")}
                values={formikProps.password}
              />
              <View style={globalstyles.errorContainer}>
                <Text style={globalstyles.errors}>
                  {formikProps.touched.confirmPassword &&
                    formikProps.errors.confirmPassword}
                </Text>
              </View>

              {/* Other Buttons */}
              <View style={styles.margin} />
              {/*This is Simply for margin used in many palces so don't be confused :) ,
              <Btn /> is not a react native default component*/}
              <Btn
                name="Continue"
                bgColor={color.blue}
                textColor={color.white}
                width={0.5}
                onPress={formikProps.handleSubmit}
              />
              <View style={styles.margin} />
              <Text
                style={{
                  fontFamily: "Roboto",
                  color: color.darkGray,
                  fontWeight: "500",
                  fontStyle: "normal",
                  fontSize: 15,
                }}
              >
                Or{" "}
                <Text
                  style={{
                    fontFamily: "Roboto",
                    color: color.lightBlue,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    fontSize: 15,
                  }}
                >
                  Continue Using
                </Text>
              </Text>
              <View style={styles.margin} />
              <View style={styles.btnContainer}>
                <Btn
                  name="Google"
                  bgColor={color.darkRed}
                  textColor={color.lightGray}
                  width={0.4}
                  onPress={() => alert("Signed Up with Google")}
                />
                <Btn
                  name="Facebook "
                  bgColor={color.facebookBlue}
                  textColor={color.lightGray}
                  width={0.42}
                  onPress={() => alert("Signed Up with Facebook")}
                />
              </View>
              <View style={styles.margin} />

              <Text style={globalstyles.bottomMessageOut}>
                Already a member ?{" "}
                <Text
                  style={globalstyles.bottomMessageIn}
                  onPress={() => navigation.navigate("Login")}
                >
                  Login
                </Text>
              </Text>
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

  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  bg: {
    position: "absolute",
    height: Dimensions.get("window").height,
  },

  margin: {
    margin: 10,
  },
  forgetPass: {
    marginRight: screenWidth - screenWidth * 0.95,
    color: color.lightBlue,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: screenWidth * 0.9,
  },
});

export default Signup;
