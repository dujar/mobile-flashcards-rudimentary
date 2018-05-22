import React, { Component } from 'react';
import {connect} from 'react-redux'
import {FontAwesome, Ionicons}from '@expo/vector-icons'
import {FlatList,View, Text, TouchableOpacity } from 'react-native'




class Decks extends Component {

  static navigationOptions = {
    title: 'List of Decks',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    tabBarIcon: () => <FontAwesome name="home" size={30} color='black'/>
  };
_onPress = (deck) => {
  console.log("working deck?",deck)
this.props.navigation.navigate('Quiz', {
  deck
})
}

_onPressCard = (title) => {
  this.props.navigation.navigate('NewCard',{title})
}
  _listItem = ({item}) => (
    <View key={item.title}>
      <Text>title: {item.title}</Text>
      <Text>questions: {item.questions.length}</Text>
      <TouchableOpacity onPress={() => this._onPress(item)}>
        <Text> take quiz </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this._onPressCard(item.title)}>
        <Text> add more cards</Text>
      </TouchableOpacity>
    </View>

  )
render(){

return this.props.decks &&
(<View>
  <FlatList
  // data={[{title: "hi", questions: ["3"]},{title: "hihi", questions: ["1","2"]}]}
  data={this.props.decks}
  // keyExtractor={({item}) => item.title}
  renderItem={this._listItem}
/>
</View>)
}
}

const mapStateToProps = (state) => {

  let decks = Object.keys(state.decks).map((el) => state.decks[el] )
  console.log("state", state.decks)
console.log("decks list",decks)
console.log(Array.isArray(decks))
  return {
  decks: decks
}
}

export default connect(mapStateToProps)(Decks)