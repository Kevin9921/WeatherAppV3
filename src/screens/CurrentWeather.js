import React from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowTexts from "../components/RowTexts";
import { weatherType } from "../Utilities/weatherType";
import ListItem from "../components/ListItem";
import { ScrollView } from "react-native";
import IconText from "../components/IconText.js";
import moment from "moment";

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
    icon,
    cityStyle,
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData.list[0];
  const { name, country, population, sunrise, sunset } = weatherData.city;

  const weatherCondition = weather[0]?.main;
  const render = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      weatherTemp={item.main.temp}
    />
  );

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <ScrollView>
        <View style={container}>
          <Text style={cityStyle}>{`${name}`}</Text>
          <Feather
            name={weatherType[weatherCondition]?.icon}
            size={100}
            color="white"
          />

          <Text style={tempStyles}>{` ${Math.round(temp)}°`}</Text>
          <Text style={feels}>{`Feels like ${Math.round(feels_like)}°`}</Text>
          <RowTexts
            messageOne={`High: ${Math.round(temp_max)}°`}
            messageTwo={` Low: ${Math.round(temp_min)}°`}
            containerStyles={highLowWrapper}
            messageOneStyles={highLow}
            messageTwoStyles={highLow}
          />
        </View>

        <RowTexts
          messageOne={weather[0]?.description}
          messageTwo={weatherType[weatherCondition]?.message}
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
        <View style={styles.hourContainer}>
          <Text style={styles.hourlyTitle}>3 HOUR WEATHER </Text>
          <FlatList
            style={styles.hourlyWeather}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={weatherData.list}
            renderItem={render}
            keyExtractor={(item) => item.dt_txt}
          />
        </View>
        <View style={[styles.riseSetWrapper, styles.rowLayout]}>
          <View style={styles.sunRSBox}>
            <IconText
              iconName={"sunrise"}
              iconColor={"white"}
              bodyText={moment(sunrise).format("h:mm:ss a")}
              bodyTextStyles={styles.riseSetText}
            />
          </View>
          <View style={styles.sunRSBox}>
            <IconText
              iconName={"sunset"}
              iconColor={"white"}
              bodyText={moment(sunset).format("h:mm:ss a")}
              bodyTextStyles={styles.riseSetText}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
    flexDirection: "column",
  },
  container: {
    flex: 3,
    alignItems: "center",
  },
  tempStyles: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginTop: 75,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
  cityStyle: {
    fontSize: 50,
    marginTop: 10,
    marginBottom: 20,
  },
  hourlyWeather: {
    flex: 1,
  },
  hourContainer: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
  },
  hourlyTitle: {
    fontSize: 15,
    paddingLeft: 15,
    paddingTop: 5,
  },
  riseSetWrapper: {
    justifyContent: "space-around",
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
  sunRSBox: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
  },
});
export default CurrentWeather;
