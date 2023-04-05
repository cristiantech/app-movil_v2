
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Restaurants from '../screen/Restaurants'
import Favorites from '../screen/Favorites'
import TopRestaurants from '../screen/TopRestaurants'
import Search from '../screen/Search'
import Account from '../screen/Account'
import RestaurantsStack from './RestaurantsStack'


const tab = createBottomTabNavigator()
export default function Navigations() {
  return (
    // Navigacion por tabs 
    <NavigationContainer>
      <tab.Navigator>
        <tab.Screen name='restaurants' component={RestaurantsStack} options={{title: "Restaurante"}}/>
        <tab.Screen name='favorites' component={Favorites} options={{title: "Favoritos"}}/>
        <tab.Screen name='toprestauranst' component={TopRestaurants} options={{title: "Top"}}/>
        <tab.Screen name='search' component={Search} options={{title: "Buscar"}}/>
        <tab.Screen name='account' component={Account} options={{title: "Cuenta"}}/>         
      </tab.Navigator>
    </NavigationContainer>
  )
}