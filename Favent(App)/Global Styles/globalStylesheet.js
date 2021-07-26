import color from "../assets/color";
import { StyleSheet, Dimensions } from "react-native";

let screenHeight = Dimensions.get("window").height;
let screenWidth = Dimensions.get("window").width;

const globalstyles = StyleSheet.create({
  //Login And Signup Page bottom text
  bottomMessageOut: {
    fontFamily: "Roboto",
    color: color.darkGray,
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: 20,
  },
  bottomMessageIn: {
    fontFamily: "Roboto",
    color: color.lightBlue,
    fontWeight: "bold",
    fontStyle: "normal",
  },
  errorContainer: {
    alignSelf: "flex-start",
    marginLeft: screenWidth * 0.09,
  },
  errors: {
    color: color.blue,
    fontSize: 12,
  },
  smallLogo: {
    marginTop: 30,
    marginLeft: 27,
  },
  profileCreationTitles: {
    fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: "bold",
    color: color.darkGray,
    marginLeft: screenWidth * 0.05,
    marginTop: 30,
  },
  profileCreationDiscription: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "500",
    color: color.gray,
    marginLeft: screenWidth * 0.05,
    marginTop: 3,
  },
  hidden: {
    display: "none",
  },
  margin: {
    margin: 10,
  },
});

export default globalstyles;
