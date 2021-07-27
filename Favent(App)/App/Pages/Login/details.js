import React from "react";
import {
  Text,
  Dimensions,
  View,
  Image,
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
    firstName: yup.string().min(2).max(40).required(),
    lastName: yup.string().min(2).max(40).required(),
    country: yup.string().min(2).max(40).required(),
  });

  const [checkboxState, setCheckboxState] = React.useState(false);

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", country: "" }}
      validationSchema={ReviewForm}
      onSubmit={(values) => {
        console.log(values);
        alert(`${values.firstName}, Welcome you are logged in`);
        navigation.navigate("SkillAndIndustry");
      }}
    >
      {(formikProps) => (
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

              <View style={globalstyles.margin} />

              <View
                style={{
                  marginHorizontal: screenWidth * 0.15,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <BouncyCheckbox
                  style={{ borderColor: color.lightBlue }}
                  fillColor={color.lightBlue}
                  isChecked={checkboxState}
                  disableBuiltInState
                  onPress={() => setCheckboxState(!checkboxState)}
                />

                <Text>
                  These are some of the{" "}
                  <Text style={{ color: color.blue }}>terms and condition</Text>
                  {" & "}{" "}
                  <Text style={{ color: color.blue, display: "none" }}>
                    The Privicy Policies
                  </Text>
                  that a user might need to allow.
                </Text>
              </View>

              <View style={globalstyles.margin} />
              <View style={globalstyles.margin} />
              <View style={globalstyles.margin} />

              <Btn
                disabled={!checkboxState}
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

//Error is .. Form Not validating ... ?!!
