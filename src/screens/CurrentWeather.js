import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowTexts from '../components/RowTexts'
import { weatherType } from "../Utilities/weatherType";



const CurrentWeather = ({weatherData}) => {
  const {wrapper, container, tempStyles, feels, highLowWrapper, highLow, bodyWrapper, description, message,icon, cityStyle} = styles
  
  const {main:{ temp, feels_like, temp_max,temp_min }, weather} = weatherData.list[0]
  const {name, country, population, sunrise, sunset} = weatherData.city

  const weatherCondition = weather[0]?.main

  return (
    <SafeAreaView style ={[
      wrapper, {backgroundColor: weatherType[weatherCondition]?.backgroundColor}
    ]}>
      
      <View style ={container}>
      <Text style= {cityStyle}>{`${name}°`}</Text>
        <Feather 
       
        name={weatherType[weatherCondition]?.icon} 
        size={100} 
        color="white" />

          
          <Text style = {tempStyles}>{`${temp}°`}</Text>
          <Text style = {feels}>{`Feels like ${feels_like}°`}</Text>
          <RowTexts 
          messageOne= {`High: ${temp_max}°`} 
          messageTwo = {` Low: ${temp_min}°`}  
          containerStyles={highLowWrapper} 
          messageOneStyles={highLow} 
          messageTwoStyles={highLow}/>
      </View>
      <RowTexts 
        messageOne ={weather[0]?.description} 
        messageTwo ={weatherType[weatherCondition]?.message} 
        containerStyles={bodyWrapper} 
        messageOneStyles ={description} 
        messageTwoStyles={message}/>
  
     

    </SafeAreaView>
  )
} 
const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor: 'pink',
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  icon:{
    paddingBottom: 30
  },
  feels:{
    fontSize: 30,
    color: 'black'
  },
  highLow:{
    color:'black',
    fontSize: 20
  },
  highLowWrapper:{
    flexDirection: 'row'
  },
  bodyWrapper:{
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
    paddingTop: 50
  },
  description:{
    fontSize: 48
  },
  message:{
    fontSize: 30
  },
  cityStyle:{
    fontSize:50,
    marginBottom: 60
  }
})
export default CurrentWeather