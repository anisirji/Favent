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
  }, //Input Errors
  errorContainer: {
    alignSelf: "flex-start",
    marginLeft: screenWidth * 0.09,
  },
  errors: {
    color: color.blue,
    fontSize: 12,
  }, //Pages Repetattivee Title and logos
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
    marginTop: 10,
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
  }, //Info Card Container
  InfoCardContainer: {
    backgroundColor: color.cardBlue,
    padding: 10,
    borderRadius: 15,
    marginBottom: 20,
  },
  InfoCardTitle: {
    fontSize: 17,
    marginBottom: 10,
    fontWeight: "400",
    color: color.white,
    fontFamily: "Roboto",
    fontStyle: "normal",
  },
  InfoCardItem: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center",
  },
  InfoCardItemsDes: {
    marginLeft: 10,
    color: color.lightGray,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 13,
    fontWeight: "300",
  },
  cardDel: {
    position: "absolute",
    right: 20,
    bottom: 20,
    color: color.lightGray,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 13,
    fontWeight: "300",
  }, //Circle Btn
  circleBtnShadow: {
    height: 59,
    width: 59,
    borderRadius: 100,
    backgroundColor: "#efefef",
  },
  circleBtn: {
    backgroundColor: color.green,
    height: 55,
    width: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  circleBtnName: {
    fontSize: 30,
    fontWeight: "bold",
    color: color.white,
    fontFamily: "Roboto",
    fontStyle: "normal",
  },
});

export default globalstyles;
