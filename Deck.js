import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import withOpacity from './withOpacity'
class Deck extends Component {

  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state
    return {
      title: params? params.deck.title : 'no deck title'
    }
  }

  render(){
const deck = this.props.navigation.getParam('deck', {
  title:'no deck was found'
})

    return(

<View style={styles.deckContainer}>


<Text> title: {deck.title}</Text>
<Text> {deck.questions.length} cards</Text>
<TouchableOpacity onPress={({navigation}) => this.props.navigation.navigate('NewCard',{title: deck.title})}>
<Text>Add Card</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={({navigation}) => this.props.navigation.navigate('Quiz',{deck})}>
  <Text>Start Quiz</Text>
  </TouchableOpacity>
</View>
  )
  }
}

const styles = StyleSheet.create({
  deckContainer:{
padding :20,
backgroundColor: 'purple'
  }
})

export default withOpacity(Deck)