import React from "react";
import {
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import IconText from "../components/IconText.js";
import moment from "moment";

const City = ({ weatherData }) => {
  const {
    container,
    cityName,
    citytext,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
  } = styles;
  const { name, country, population, sunrise, sunset } = weatherData;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city-background.jpg")}
        style={styles.imageLayout}
      >
        <Text style={[cityName, citytext]}>{name}</Text>
        <Text style={[countryName, citytext]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={moment(sunrise).format("h:mm:ss a")}
            bodyTextStyles={riseSetText}
          />

          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={moment(sunset).format("h:mm:ss a")}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  citytext: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
    fontWeight: "bold",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default City;
