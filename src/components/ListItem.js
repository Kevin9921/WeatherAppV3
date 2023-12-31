import React from "react";
import { View, Text, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

import moment from 'moment'
import { weatherType } from "../Utilities/weatherType.js";

const ListItem = (props) => {
    const {dt_txt, weatherTemp, condition} = props
    const {item, date, temp, dateTextWrapper} = styles
  
    return(
        
        <View style={item}>
            <Feather name = {weatherType[condition].icon} size ={50} color={'white'}/>
            <View style = {dateTextWrapper}> 
                <Text style = {date}> {moment(dt_txt).format(`dddd`)} </Text>
                <Text style = {date}> {moment(dt_txt).format('h:mm a')}</Text>
            </View>
            <Text style = {temp}> {`${Math.round(weatherTemp)}°`} </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding:5,
        marginVertical: 8,
      
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: "center",
       
       
    },
    temp:{
        color: 'white',
        fontSize: 20
    },
    date:{
        color: 'white',
        fontSize:15,
        alignSelf: "center",
    },
    dateTextWrapper:{
        flexDirection: 'column'
    }
})
export default ListItem
