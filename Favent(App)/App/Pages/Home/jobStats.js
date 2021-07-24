import React from "react";
import { Button, Text, View, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const JobsStats = () => {
  let screenWidth = Dimensions.get("window").width;
  let screenHeight = Dimensions.get("window").height;
  return (
    <View style={{ margin: 30 }}>
      <Text>Jobs Stats</Text>
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
          <Text style={{ color: "white" }}>Active</Text>
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
            backgroundColor: "blue",
          }}
        >
          <Text style={{ color: "white" }}>History</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default JobsStats;
