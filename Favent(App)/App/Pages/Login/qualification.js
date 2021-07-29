import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
  SafeAreaView,
  Button,
} from "react-native";
import globalstyles from "../../../Global Styles/globalStylesheet";
import InfoCard from "../../Components/InfoCard";
import color from "../../../assets/color";
import RoundBtn from "../../Components/roundBtn";
import { useState } from "react/cjs/react.development";
import Btn from "../../Components/Button";
import AddModal from "../../Components/addModal";

const Qualification = ({ navigation }) => {
  const [modalOpen, setModalClose] = useState(false);
  const [cards, setCards] = useState([]);

  const addCards = (cards) => {
    cards.id = Math.random().toString();
    setCards((currentCards) => [cards, ...currentCards]);
  };

  return (
    <View>
      <AddModal
        visible={modalOpen}
        animationType="fade"
        onPress={() => {
          setModalClose(false);
        }}
        addCards={addCards}
        title="Add Qualifications"
        firstInput="Degree"
        secondInput="Collage or School Name"
        thirdInput="Joining Year"
        fourthInput="Compleation Year"
        fifthInput="Achivements"
      />
      <Image
        style={globalstyles.smallLogo}
        source={require("../../../assets/Images/logoSm.png")}
      />
      <Text style={globalstyles.profileCreationTitles}>Qualification</Text>

      <Text style={globalstyles.profileCreationDiscription}>
        Enter Your Qualification, It will help us to find the best match for you
      </Text>
      <View style={globalstyles.margin} />

      <SafeAreaView style={styles.cardContainer}>
        <FlatList
          data={cards}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <InfoCard
              title={item.title}
              location={item.location}
              date={item.regineDate}
            />
          )}
        />
        <View style={globalstyles.margin} />
        <View style={{ alignSelf: "center" }}>
          <Btn
            name="Add +"
            bgColor={color.green}
            textColor={color.white}
            width={0.4}
            onPress={() => setModalClose(true)}
          />
        </View>
      </SafeAreaView>
      <View style={globalstyles.margin} />
      <Btn
        name="Continue"
        bgColor={color.blue}
        textColor={color.white}
        width={0.5}
        onPress={() => navigation.push("WorkExp")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    maxHeight: Dimensions.get("window").height * 0.65,
    marginHorizontal: Dimensions.get("window").width * 0.05,
  },
});

export default Qualification;
