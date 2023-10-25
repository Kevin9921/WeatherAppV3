import React from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowTexts from '../components/RowTexts'
import { weatherType } from "../Utilities/weatherType";
import ListItem from "../components/ListItem";
import { ScrollView } from "react-native";




const CurrentWeather = ({weatherData}) => {
  const {wrapper, container, tempStyles, feels, highLowWrapper, highLow, bodyWrapper, description, message,icon, cityStyle} = styles
  
  const {main:{ temp, feels_like, temp_max, temp_min }, weather} = weatherData.list[0]
  const {name, country, population, sunrise, sunset} = weatherData.city

  const weatherCondition = weather[0]?.main
  const render = ({item}) => (
    <ListItem 
    condition = {item.weather[0].main} 
    dt_txt={item.dt_txt} 
    min = {item.main.temp_min} 
    max = {item.main.temp_max} 
    />
    
)   
 

  return (
    <SafeAreaView style ={[
      wrapper, {backgroundColor: weatherType[weatherCondition]?.backgroundColor}
    ]}>
      
      <ScrollView>
      <View style ={container}>
      <Text style= {cityStyle}>{`${name}`}</Text>
        <Feather 
       
        name={weatherType[weatherCondition]?.icon} 
        size={100} 
        color="white" />

          
          <Text style = {tempStyles}>{`${Math.round(temp)}°`}</Text>
          <Text style = {feels}>{`Feels like ${Math.round(feels_like)}°`}</Text>
          <RowTexts 
          messageOne= {`High: ${Math.round(temp_max)}°`} 
          messageTwo = {` Low: ${Math.round(temp_min)}°`}  
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
      
      <FlatList
      style ={{flex:1}}
        horizontal
        data = {weatherData.list} 
        renderItem={render}
        keyExtractor={(item) => item.dt_txt}
      
        />
      <Text> hello</Text>
      <Text> hello</Text>
      <Text> hello</Text>
      <Text> hello</Text>
      <Text> hello</Text>
      <Text> hello</Text>
      <Text> hello</Text>
      <Text> hello</Text>
      <Text> hello</Text>
      <Text> hello</Text>
      <Text> hello</Text>
      <Text> hello</Text>
      <Text> hello</Text>
      <Text> hello</Text>
      <Text> hello</Text>
      <Text> hello</Text>
      <Text> hello</Text>
      <Text> hello</Text>
      <Text> hello</Text>
      <Text> hello</Text>

      </ScrollView>
    </SafeAreaView>
  )
  
} 

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor: 'pink',
    flexDirection: 'column',
  },
  container:{
    
    flex: 3,
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
    marginTop: 20,
    marginBottom: 20
  
  },
  description:{
    fontSize: 48
  },
  message:{
    fontSize: 30
  },
  cityStyle:{
    fontSize:50,
    marginTop: 40,
    marginBottom: 40
   
  }
})
export default CurrentWeather