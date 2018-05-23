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


<Text style={styles.text}>deck: {deck.title}</Text>
<Text style={styles.text}> {deck.questions.length} cards in the deck!</Text>
<TouchableOpacity style={styles.buttonAdd}
				onPress={({navigation}) => this.props.navigation.navigate('NewCard',{title: deck.title})}>
<Text>Add Card</Text>
  </TouchableOpacity>
	{ deck.questions.length > 0  && (<TouchableOpacity style={styles.buttonQuiz} onPress={({navigation}) => this.props.navigation.navigate('Quiz',{deck})}>
  <Text>Start Quiz</Text>
	</TouchableOpacity>)
	}
</View>)
  }
}

const styles = StyleSheet.create({
  deckContainer:{
padding :20,
					backgroundColor: 'purple',
					justifyContent: "space-around",
					alignItems: 'center',

	},
				text: {
								fontWeight: "300",
								fontSize: 30,

				},
				buttonAdd: {
								backgroundColor: "green",
								borderRadius: 15,
								borderWidth: 5,
								padding: 10,
								marginBottom: 10,

				},
				buttonQuiz: {
								padding: 10,
								borderWidth: 5,
								borderRadius: 15,
				backgroundColor: "red"
				}
})

export default withOpacity(Deck)
