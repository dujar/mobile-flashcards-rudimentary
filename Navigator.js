import React, { Component } from 'react';
import { createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation'
import {View,Text,} from 'react-native'
import Decks from './Decks'
import NewDeck from './NewDeck'
import {FontAwesome, Ionicons}from '@expo/vector-icons'
import StartQuiz from './StartQuiz'
import NewCard from './NewCard'
import Content from './Content'

export const StackNavigator = createStackNavigator({

  Dashboard: {
    screen: Decks
  },
  NewDeck: {
    screen: NewDeck
  },
  Quiz: {
    screen: StartQuiz
  },
  NewCard: {
    screen: NewCard
  }
},
{
  initialRouteName: 'Dashboard'
}
)

export const TabNavigator = createMaterialTopTabNavigator({
  Home: {
    screen : StackNavigator,
    navigationOptions: {
      showIcon : true,
      tabBarIcon: () => <FontAwesome name="home" size={30} color='black'/>
    }
  },
  Content: {
    screen: Content,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name="dashboard" size={30} color='black'/>
    }
  }

})