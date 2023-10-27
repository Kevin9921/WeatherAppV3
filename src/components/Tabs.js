import react from "react"
import {} from 'react-native'
import CurrentWeather from "../screens/CurrentWeather.js"
import UpcomingWeather from "../screens/Upcomingweather.js"
import OurChild from "../components/OurChild.js"
import City from "../screens/City.js"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Feather} from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

const Tabs = ({weather}) => {
    return(
      <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: true,
        
        tabBarStyle:{
            backgroundColor: 'royalblue',
            
        },
        headerStyle:{
            backgroundColor:'lightblue'
        },
        headerShown:false,
        headerTitleStyle:{
            fontWeight: 'bold',
            fontSize: 25,
            color: 'tomato',
        },
        headerTitleAlign: 'center',
        //headerTransparent: true
        
         
        
        
    
     } }>
        <Tab.Screen 
        name={'Current'} 
        options= {{
          
          tabBarIcon: ({focused}) => (
          <Feather 
          name={'droplet'} 
          size ={25} 
          color={focused ? 'tomato' : 'black'}
          />
          
          )
        }}
        >
          {()=> <CurrentWeather weatherData={weather} />}
        </Tab.Screen>

        {/* <Tab.Screen 
        name = {'Upcoming'}
        options ={{
          tabBarIcon: ({focused}) => (
            <Feather 
            name={'clock'} 
            size={25} 
            color={focused? 'tomato' : 'black'}
            />
          )
        }}>
          {() => <UpcomingWeather weatherData={weather.list} />}
        </Tab.Screen> 
        */}
        {/* <Tab.Screen 
        name={'City'} 
        options = {{
          tabBarIcon: ({focused}) => (
            <Feather name={'home'} size={25} color={focused? 'tomato' : 'black'}/>
            
          )
        }}>
        {() => <City weatherData ={weather.city}/>}
      
        </Tab.Screen>  */}
      </Tab.Navigator>
      
    )
}
export default Tabs