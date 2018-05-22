import React, { Component } from 'react';
import { createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation'
import {View,Text,Animated, Easing} from 'react-native'
import Decks from './Decks'
import NewDeck from './NewDeck'
import {FontAwesome, Ionicons}from '@expo/vector-icons'
import StartQuiz from './StartQuiz'
import NewCard from './NewCard'
import Content from './Content'
import Deck from './Deck'
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
  },
  Deck: {
        screen: Deck
  }
},
{
  initialRouteName: 'Dashboard',
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
})
})

export const TabNavigator = createMaterialTopTabNavigator({
  Home: {
    screen : StackNavigator,
    navigationOptions: {
      showIcon : true,
      tabBarIcon: () => <FontAwesome name="home" size={30} color='black'/>
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      title: 'New Deck',
      tabBarIcon: () => <FontAwesome name="dashboard" size={30} color='black'/>
    }
  }

},
{
  animationEnabled: true
})