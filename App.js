import Tabs from './src/components/Tabs.js'
import { NavigationContainer } from "@react-navigation/native"
import React, {useState, useEffect} from "react"

import Counter from './src/demonstration/Counter.js'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import * as Location from 'expo-location'

import { useGetWeather } from './src/hooks/useGetWeather.js'
import ErrorItem from './src/components/ErrorItem.js'



const App = () => {
  
  const [loading, error, weather] = useGetWeather()
  

  if (weather && weather.list && !loading){
    //console.log(weather.city)
    return (
      <NavigationContainer>
        
        <Tabs weather ={weather}/>
      </NavigationContainer>
      
    )
  }

  return(
    <View style ={styles.container}>
      {error ? (
        <ErrorItem/>
        
      ) : (
        <ActivityIndicator size={'large'} color={'blue'}/>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    flex: 1
  }
})
export default App