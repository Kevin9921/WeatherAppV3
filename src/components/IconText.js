import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = (props) => {
  const { iconName, iconColor, bodyText, bodyTextStyles } = props;
  const { container, textTheme } = styles;
  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  textTheme: {
    fontWeight: "bold",
  },
});
export default IconText;
