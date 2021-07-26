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
import BouncyCheckbox from "react-native-bouncy-checkbox";

//Custom Components
import Input from "../../Components/Input";
import color from "../../../assets/color";
import Btn from "../../Components/Button";

//Global Styles
import globalstyles from "../../../Global Styles/globalStylesheet";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Details = ({ navigation }) => {
  //Validating Form
  const ReviewForm = yup.object().shape({
    firstName: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(40),
    lastName: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(40),
    country: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(40),
  });

  return (
    //Formik kind of collects all data from the form
    <Formik
      initialValues={{ firstName: "", lastName: "", country: "" }}
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
              source={require("../../../assets/Images/Backgrounds/SignupBg.png")}
            />

            <Image
              style={globalstyles.smallLogo}
              source={require("../../../assets/Images/logoSm.png")}
            />
            <Text style={globalstyles.profileCreationTitles}>
              Enter Details
            </Text>

            <View style={styles.container}>
              <Input
                placeholder="First Name"
                onBlur={formikProps.handleBlur("firstName")}
                onChangeText={formikProps.handleChange("firstName")}
                value={formikProps.values.firstName}
              />
              <View style={globalstyles.errorContainer}>
                <Text style={globalstyles.errors}>
                  {formikProps.touched.firstName &&
                    formikProps.errors.firstName}
                </Text>
              </View>

              <Input
                onBlur={formikProps.handleBlur("lastName")}
                placeholder="Last Name"
                onChangeText={formikProps.handleChange("lastName")}
                values={formikProps.lastName}
              />
              <View style={globalstyles.errorContainer}>
                <Text style={globalstyles.errors}>
                  {formikProps.touched.lastName && formikProps.errors.lastName}
                </Text>
              </View>

              <Input
                placeholder="Country"
                onBlur={formikProps.handleBlur("country")}
                onChangeText={formikProps.handleChange("country")}
                values={formikProps.password}
              />
              <View style={globalstyles.errorContainer}>
                <Text style={globalstyles.errors}>
                  {formikProps.touched.country && formikProps.errors.country}
                </Text>
              </View>

              {/* Other Buttons */}
              <View style={globalstyles.margin} />
              {/*This is Simply for margin used in many palces so don't be confused :) ,
              <Btn /> is not a react native default component*/}
              <Btn
                name="Continue"
                bgColor={color.blue}
                textColor={color.white}
                width={0.5}
                onPress={formikProps.handleSubmit}
              />
              <View style={globalstyles.margin} />
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

export default Details;
