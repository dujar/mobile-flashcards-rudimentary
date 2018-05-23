import React, { Component } from 'react';
import {connect} from 'react-redux'
import {FontAwesome, Ionicons}from '@expo/vector-icons'
import {FlatList,View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import * as actionDecks from './helpers'
import {loadState} from './localStorage.js'


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
})
}

_onPressCard = (title) => {
  this.props.navigation.navigate('NewCard',{title})
}
  _listItem = ({item}) => (
    <TouchableOpacity onPress={({navigation}) => this.props.navigation.navigate('Deck',{deck: item})}>
    <View style={styles.deckContainer} key={item.title}>
      <Text style={styles.text}>title: {item.title}</Text>
      <Text style={styles.text}>questions: {item.questions.length}</Text>
    </View>
    </TouchableOpacity>

  )



componentDidMount(){
	loadState().then(decks => {
					console.log("component did mount decks from loadState:", decks)
		this.props.fetchDecks(decks)
	}) 
}
render(){

return this.props.decks &&
(<View>
  <FlatList
  // data={[{title: "hi", questions: ["3"]},{title: "hihi", questions: ["1","2"]}]}
  data={this.props.decks}
  //keyExtractor={({item}) => item}
  renderItem={this._listItem}
/>
</View>)
}
}
const styles = StyleSheet.create({
deckContainer: {
  padding: 10,
  margin: 5,
  backgroundColor: 'blue',
  borderRadius: 15,
  borderWidth: 0.5,
  borderColor: '#d6d7da',
				borderBottomColor: '#bbb'
},
text :{
  fontSize: 30,
  fontStyle: 'italic',
  fontWeight: '500'
}

})
const mapStateToProps = (state) => {

  let decks = Object.keys(state.decks).map((el) => state.decks[el] )
  console.log("state", state.decks)
console.log("decks list",decks)
console.log(Array.isArray(decks))
  return {
  decks: decks
}
}

export default connect(mapStateToProps, actionDecks)(Decks)
