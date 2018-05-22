
import React, { Component } from 'react';
import {View,Text,TextInput, TouchableOpacity} from 'react-native'
import * as actionHelpers from './helpers'
import {connect} from 'react-redux'

class NewDeck extends Component {

  static navigationOptions = {
    title: 'Crete new Deck',
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
      <View>
        <Text>Title of new Deck</Text>
        <TextInput
        onChangeText={(text) => this.setState({text: text})}
        value={this.state.text}
        />
        <TouchableOpacity onPress={this._onPressButton}>
      <Text>Submit this new deck</Text>
    </TouchableOpacity>
      </View>
    )
  }
}

export default connect(null,actionHelpers)(NewDeck)