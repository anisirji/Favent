import React from "react";
import { Button, Text, View, ScrollView, Dimensions } from "react-native";

const JobsDescription = () => {
  let screenWidth = Dimensions.get("window").width;
  let screenHeight = Dimensions.get("window").height;

  return (
    <View>
      <Text>Jobs Description</Text>
      <ScrollView horizontal={true} pagingEnabled={true}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            width: screenWidth,
            height: screenHeight,
            marginTop: 10,
            backgroundColor: "blue",
          }}
        >
          <Text style={{ color: "white" }}>About Job</Text>
        </View>

        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            width: screenWidth,
            height: screenHeight,
            marginTop: 10,
            backgroundColor: "pink",
          }}
        >
          <Text>About Company</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default JobsDescription;
