
import React, { Component } from 'react';
import {View,Text,TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import * as actionHelpers from './helpers'
import {connect} from 'react-redux'

class NewDeck extends Component {

  static navigationOptions = {
    title: 'Create new Deck',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  state = {
    text: ''
  }

  _onPressButton = () => {
    this.props.saveDeckTitle(this.state.text)
    this.props.navigation.navigate("Deck",{
      deck:{
        title: this.state.text,
        questions: []
      }
    })
  }
  render(){


    return(
      <View style={styles.container}>
        <Text style={styles.text}>Title of new Deck</Text>
				<TextInput
					style={styles.text}
        onChangeText={(text) => this.setState({text: text})}
        value={this.state.text}
        />
        <TouchableOpacity onPress={this._onPressButton}
								style={styles.buttonSubmit}>
      <Text>Submit this new deck</Text>
    </TouchableOpacity>
      </View>
    )
  }
}



const styles = StyleSheet.create({
				container: {
								padding: 40,
				},
				text: {
								fontSize: 30,
								fontWeight: '100',
				},
				buttonSubmit : {
								backgroundColor: 'green',
								borderRadius: 15,
								borderWidth: 5,
								padding: 5
				}
})

export default connect(null,actionHelpers)(NewDeck)
