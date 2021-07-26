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

const Login = ({ navigation }) => {
  //Validating Form
  const ReviewForm = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().required(),
  });

  return (
    //Formik kind of collects all data from the form
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={ReviewForm}
      onSubmit={(values) => {
        //Jay & Yash you get "values" object onSubmit SEE IN CONSOLE
        console.log(values);
      }}
    >
      {(formikProps) => (
        //Dismissing Keyboard on click anywere on screen
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.main}>
            <Image
              style={styles.bg}
              source={require("../../../assets/Images/Backgrounds/Loginbg.png")}
            />
            {/* Container */}
            <View style={styles.container}>
              {/* Logo */}
              <Image source={require("../../../assets/Images/logoLg.png")} />
              <Text style={styles.title}>FAVENT</Text>
              <Text style={styles.subTitle}>Find Your Perfect Job</Text>
              {/* Custom InputFields */}
              <Input
                placeholder="Email"
                onChangeText={formikProps.handleChange("username")}
                value={formikProps.values.username}
              />
              <View style={globalstyles.errorContainer}>
                <Text style={globalstyles.errors}>
                  {formikProps.touched.username && formikProps.errors.username}
                </Text>
              </View>
              <View style={styles.margin} />
              <Input
                placeholder="Password"
                secure={true}
                onChangeText={formikProps.handleChange("password")}
                values={formikProps.password}
              />
              <View style={globalstyles.errorContainer}>
                <Text style={globalstyles.errors}>
                  {formikProps.touched.password && formikProps.errors.password}
                </Text>
              </View>
              {/* Forget Password Button */}
              <View style={{ alignSelf: "flex-end" }}>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text
                    style={styles.forgetPass}
                    onPress={() => navigation.navigate("ForgetPass1")}
                  >
                    Forget Password ?
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Other Buttons */}
              <View style={styles.margin} />
              {/*This is Simply for margin used in many palces so don't be confused :) ,
              <Btn /> is not a react native default component*/}
              <Btn
                name="Login"
                bgColor={color.darkBlue}
                textColor={color.lightGray}
                width={0.4}
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
                  Connect Using
                </Text>
              </Text>
              <View style={styles.margin} />
              <View style={styles.btnContainer}>
                <Btn
                  name="Google"
                  bgColor={color.darkRed}
                  textColor={color.lightGray}
                  width={0.42}
                  onPress={() => alert("Logged In with Google")}
                />
                <Btn
                  name="Facebook "
                  bgColor={color.facebookBlue}
                  textColor={color.lightGray}
                  width={0.42}
                  onPress={() => alert("Logged In with Facebook")}
                />
              </View>
              <View style={styles.margin} />

              <Text style={globalstyles.bottomMessageOut}>
                Don't have an account ?{" "}
                <Text
                  style={globalstyles.bottomMessageIn}
                  onPress={() => navigation.navigate("Signup")}
                >
                  Signup
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
    marginTop: 55,
  },

  bg: {
    position: "absolute",
    height: Dimensions.get("window").height,
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 35.16,
    color: color.darkBlue,
    fontStyle: "normal",
    marginTop: 10,
  },
  subTitle: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 20,
    color: color.lightBlue,
    fontStyle: "normal",
    margin: 10,
    marginBottom: 30,
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
    width: screenWidth,
  },
});

export default Login;
