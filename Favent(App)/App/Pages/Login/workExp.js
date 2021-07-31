import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  SafeAreaView,
} from "react-native";
import globalstyles from "../../../Global Styles/globalStylesheet";
import InfoCard from "../../Components/InfoCard";
import color from "../../../assets/color";
import { useState } from "react/cjs/react.development";
import Btn from "../../Components/Button";
import AddModal from "../../Components/addModal";

const Qualification = ({ navigation }) => {
  const [modalOpen, setModalClose] = useState(false);
  // const [btn, setBtn] = useState(true);
  const [cards, setCards] = useState([]);

  // function checkBtn() {
  //   if (cards.length > 0) {
  //     setBtn(false);
  //   } else setBtn(true);
  // }

  const { v4: uuidv4 } = require("uuid");

  const addCards = (cards) => {
    cards.id = uuidv4();
    setCards((currentCards) => [cards, ...currentCards]);
  };

  const delCards = (id) => {
    // checkBtn();
    setCards((prevCards) => {
      return prevCards.filter((card) => card.id != id);
    });
    // setCards((clickedCard) => clickedCard.filter((cards) => cards.id != id));
  };

  return (
    <View
      style={{
        height: Dimensions.get("window").height,
      }}
    >
      <AddModal
        visible={modalOpen}
        animationType="fade"
        onPress={() => {
          setModalClose(false);
          // checkBtn();
        }}
        addCards={addCards}
        title="Add Experiences"
        firstInput="Position"
        secondInput="Company Name"
        thirdInput="Joining Year"
        fourthInput="Regignation Year"
        fifthInput="Work Description"
      />

      <Image
        style={globalstyles.smallLogo}
        source={require("../../../assets/Images/logoSm.png")}
      />

      <Text style={globalstyles.profileCreationDiscription}>
        Please provide us some of of your past expriences. If any.
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
              onPress={() => delCards(item.id)}
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
      <View style={globalstyles.bottomBtnContainer}>
        <Btn
          // disabled={btn}
          name="Continue"
          bgColor={color.blue}
          textColor={color.white}
          width={0.45}
          onPress={() => navigation.navigate("Resume")}
        />
        <Btn
          name="Skip"
          bgColor={color.lightGray}
          textColor={color.blue}
          width={0.45}
          onPress={() => alert("This will take you to the home page")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    maxHeight: Dimensions.get("window").height * 0.6,
    marginHorizontal: Dimensions.get("window").width * 0.05,
  },
});

export default Qualification;

//Btn Not Working
