import React, {useState, useEffect} from "react";
import {View, Text, Button, StyleSheet} from 'react-native'



const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`Our count value is ${count}`)
    })
    return(
        <View style = {styles.container}>
        <Text style = {styles.title}>{`count: ${count}`}</Text> 
        <Button title = {'Click this to increment'} 
            onPress ={ () => {
                setCount(count + 1)
           
            }} /> 
        <Button title = {'Click this to decrement'} color={'black'} 
            onPress ={ () => {
                setCount(count - 1)

            }} /> 
          <Button title = {'set 0'} color={'black'} 
            onPress ={ () => {
                setCount(0)

            }} /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 40
    },
    title:{
        alignSelf:'center',
        fontSize: 20,
        
    }


})

export default Counter