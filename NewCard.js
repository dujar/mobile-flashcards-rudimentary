
import React, { Component } from 'react';
import {View,Text,TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import * as actionHelpers from './helpers'
import {connect} from 'react-redux'

class NewDeck extends Component {

  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state
    const title = params.title
    console.log("params",JSON.stringify(params))
    return {
    title: params? `add Cards for deck: ${title}` : 'no title for this deck, hence a problemo! :(',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
}

  state = {
    question: '',
    answer: ''
  }

  _onPressButton = () => {
    const card = {
      question: this.state.question,
      answer: this.state.answer
    }
    this.props.addCardToDeck(this.props.navigation.getParam('title',''),card)
    this.props.navigation.navigate('Dashboard')
  }
  render(){


    return(
      <View style={styles.cardContainer}>
        <Text style={styles.text}>Question</Text>
        <TextInput
				style={styles.text}
        onChangeText={(text) => this.setState({question: text})}
        value={this.state.text}
        />
        <Text style={styles.text}>Answer</Text>
        <TextInput
					style={styles.text}
        onChangeText={(text) => this.setState({answer: text})}
        value={this.state.text}
        />
        <TouchableOpacity style={styles.submitButton}onPress={this._onPressButton}>

      <Text>Submit this new deck</Text>
    </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  cardContainer:{
    padding: 50,
	},
				text: {
								fontWeight: '300',
								fontSize: 40,

				},
				submitButton :{
								borderRadius: 10,
								backgroundColor: 'green',
								borderWidth: 5,
				}

})

export default connect(null,actionHelpers)(NewDeck)
