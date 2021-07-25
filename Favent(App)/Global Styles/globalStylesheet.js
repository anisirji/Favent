import color from "../assets/color";
import { StyleSheet } from "react-native";

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
  errors: {
    color: color.red,
    fontSize: 12,
  },
});

export default globalstyles;
