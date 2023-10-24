import React from "react";
import {SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground } from 'react-native';

import ListItem from "../components/ListItem";



const UpcomingWeather = ({weatherData}) => {
    const render = ({item}) => (
        <ListItem 
        condition = {item.weather[0].main} 
        dt_txt={item.dt_txt} 
        min = {item.main.temp_min} 
        max = {item.main.temp_max} 
        />
        
    )   
    const {container, image} = style
    return(

        <SafeAreaView style = {container}> 
            <ImageBackground 
            style = {image} 
            source = {require('../../assets/upcoming-background.jpg')}
            
            > 
                <FlatList 
                    data = {weatherData} 
                    renderItem={render}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )

    
}
//{({item}) => <Item dt_txt={item.dt_txt} min = {item.main.temp_min} />
const style = StyleSheet.create({
    container:{
        flex:1,
      
        backgroundColor: 'royalblue'
    },
    image:{
        flex: 1
    }
}) 
export default UpcomingWeather
