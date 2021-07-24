import React from "react";
import { Button, Text, View, ViewScroll } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Job Applied"
        onPress={() => navigation.navigate("Applied")}
      />
      <Button
        title="Job Sechudeld"
        onPress={() => navigation.navigate("Scheduled")}
      />
      <Button
        title="Job Shortlisted"
        onPress={() => navigation.navigate("Shortlisted")}
      />
      <Button
        title="Jobs Description Page"
        onPress={() => navigation.navigate("JobsDescription")}
      />
    </View>
  );
};

export default Home;
