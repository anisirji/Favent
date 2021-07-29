import { Text, View, Image } from "react-native";
import React from "react";
import globalstyles from "../../Global Styles/globalStylesheet";

const InfoCard = (props) => {
  return (
    <View style={globalstyles.InfoCardContainer}>
      <Text style={globalstyles.InfoCardTitle}>{props.title}</Text>
      <View style={globalstyles.InfoCardItem}>
        <Image source={require("../../assets/Images/Icons/location.png")} />
        <Text style={globalstyles.InfoCardItemsDes}>From {props.location}</Text>
      </View>

      <View style={globalstyles.InfoCardItem}>
        <Image source={require("../../assets/Images/Icons/calender.png")} />
        <Text style={globalstyles.InfoCardItemsDes}>
          Completed in {props.date}{" "}
        </Text>
      </View>
      <Text style={globalstyles.cardDel}>Detete</Text>
    </View>
  );
};

export default InfoCard;
