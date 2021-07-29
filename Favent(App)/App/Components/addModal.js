import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import globalstyles from "../../Global Styles/globalStylesheet";
import ModalInput from "./ModalInput";
import Btn from "./Button";
import color from "../../assets/color";
import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react/cjs/react.development";

const AddModal = (props) => {
  const [btn, setBtn] = useState(false);

  const ReviewForm = yup.object().shape({
    title: yup.string().min(5).max(20).required(),
    location: yup.string().min(4).max(20).required(),
    joiningDate: yup.string().required(),
    regineDate: yup.string().required(),
    jobDescription: yup.string().required(),
  });

  return (
    <Modal visible={props.visible} animationType={props.animationType}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <Image
                style={globalstyles.smallLogo}
                source={require("../../assets/Images/logoSm.png")}
              />
              <TouchableOpacity
                onPress={() => {
                  props.onPress();
                }}
                activeOpacity={0.7}
              >
                <Image
                  style={globalstyles.smallLogo}
                  source={require("../../assets/Images/Icons/leftarrow.png")}
                />
              </TouchableOpacity>
              <Formik
                validationSchema={ReviewForm}
                initialValues={{
                  title: "",
                  location: "",
                  joiningDate: "",
                  regineDate: "",
                  jobDescription: "",
                }}
                onSubmit={(values) => {
                  props.addCards(values);
                  console.log(values);
                  alert("saved");
                  props.onPress();
                }}
              >
                {(formikProps) => (
                  <>
                    <View style={modal.container}>
                      <Text style={globalstyles.profileCreationTitles}>
                        {props.title}
                      </Text>
                      <View style={globalstyles.margin} />

                      {/* Input Fields */}
                      <ModalInput
                        placeholder={props.firstInput}
                        source={require("../../assets/Images/Icons/work.png")}
                        flexDirection="row"
                        height={50}
                        onChangeText={formikProps.handleChange("title")}
                        values={formikProps.title}
                      />
                      <View style={globalstyles.errorContainer}>
                        <Text style={globalstyles.errors}>
                          {formikProps.touched.title &&
                            formikProps.errors.title}
                        </Text>
                      </View>
                      <ModalInput
                        placeholder={props.secondInput}
                        source={require("../../assets/Images/Icons/building.png")}
                        flexDirection="row"
                        height={50}
                        onChangeText={formikProps.handleChange("location")}
                        values={formikProps.location}
                      />
                      <View style={globalstyles.errorContainer}>
                        <Text style={globalstyles.errors}>
                          {formikProps.touched.location &&
                            formikProps.errors.location}
                        </Text>
                      </View>
                      <ModalInput
                        placeholder={props.thirdInput}
                        source={require("../../assets/Images/Icons/calender2.png")}
                        flexDirection="row-reverse"
                        height={50}
                        onChangeText={formikProps.handleChange("joiningDate")}
                        values={formikProps.joiningDate}
                      />
                      <View style={globalstyles.errorContainer}>
                        <Text style={globalstyles.errors}>
                          {formikProps.touched.joiningDate &&
                            formikProps.errors.joiningDate}
                        </Text>
                      </View>
                      <ModalInput
                        placeholder={props.fourthInput}
                        source={require("../../assets/Images/Icons/calender2.png")}
                        flexDirection="row-reverse"
                        height={50}
                        onChangeText={formikProps.handleChange("regineDate")}
                        values={formikProps.regineDate}
                      />
                      <View style={globalstyles.errorContainer}>
                        <Text style={globalstyles.errors}>
                          {formikProps.touched.regineDate &&
                            formikProps.errors.regineDate}
                        </Text>
                      </View>
                      <ModalInput
                        placeholder={props.fifthInput}
                        source={require("../../assets/Images/Icons/paragraph.png")}
                        flexDirection="row"
                        multiline={true}
                        lines={4}
                        height={80}
                        onChangeText={formikProps.handleChange(
                          "jobDescription"
                        )}
                        values={formikProps.jobDescription}
                      />
                      <View style={globalstyles.errorContainer}>
                        <Text style={globalstyles.errors}>
                          {formikProps.touched.jobDescription &&
                            formikProps.errors.jobDescription}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 10,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          formikProps.handleSubmit();
                        }}
                        activeOpacity={0.7}
                      >
                        <Btn
                          name="Save"
                          bgColor={color.green}
                          textColor={color.white}
                          width={0.4}
                        />
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </Formik>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const modal = StyleSheet.create({
  container: {
    marginHorizontal: Dimensions.get("window").width * 0.05,
  },
});

export default AddModal;
