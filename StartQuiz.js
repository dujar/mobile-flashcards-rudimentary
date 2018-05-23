import React, { Component } from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'

import { clearLocalNotification, setLocalNotification } from './notification_helper.js'

class StartQuiz extends Component {

  static navigationOptions = ({ navigation }) => {

    const {params} = navigation.state
    const title = params.deck.title
    console.log("params",JSON.stringify(params))
    return{
    title: params? `start quiz on ${title}` : 'no title for this quiz',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    tabBarIcon: () => <FontAwesome name="home" size={30} color='black'/>
  };
}

  state = {
    answer: false,
    scoreBoard: {
      score: 0,
      questions: {}
    },
    currentQuestion: 1,
  }




  _onPressButtonAnswer = () => {
    console.log("pressed answer")
    this.setState((oldState) => ({
      ...oldState,
      answer: true,
    }))
  }
  _onPressButtonQuestion = () => {
    console.log("pressed question")
    this.setState((oldState) => ({
      ...oldState,
      answer: false,
    }))
  }

  _onPressButtonScore = (val) => {
    let num = 0
    if(val === "correct") { num = 1}

    console.log("holy molly", val)
    this.setState((oldState) => ({
      ...oldState,
      scoreBoard: {
        ...oldState.scoreBoard,
        score: oldState.scoreBoard.score + num,
        questions: {
          ...oldState.scoreBoard.questions,
          [oldState.currentQuestion]: num
        }
      },
      currentQuestion: oldState.currentQuestion + 1,
      })
    )
	}

_onPressBacktoDecksWithNotification = () => {

				this.props.navigation.navigate('Dashboard')

				try{

				clearLocalNotification().then(setLocalNotification)
				} catch (err) {
				console.log("error occured setting notification for tomorrow:",err)
				}
}
  render(){

    const {currentQuestion, answer} = this.state
    const {score, questions} = this.state.scoreBoard
// from params

const deck = this.props.navigation.getParam('deck',"did not find it")
const questionLength = deck.questions.length
const index = currentQuestion - 1
//

if(index === questionLength){
  return (
    <View style={styles.quizContainer}>
      <Text>Score : {score } ---</Text>
      {/* {
        Object.keys(questions).map(el => (questions[el]
            ? <Text key={el} style={styles.correct}> correcto: { deck.questions[el]} </Text>
            : <Text key={el} style={styles.incorrect}> wrongo: { deck.questions[el]} </Text>
        ))
      } */}
			<TouchableOpacity onPress={this._onPressBacktoDecksWithNotification}>
							<Text>Go back to decks</Text>
			</TouchableOpacity>
    </View>
  )
}

    return(
<View style={styles.quizContainer}>
<Text>Question : {currentQuestion} out of {questionLength}</Text>
						{ !answer 
														?(<View>
		<Text>{deck.questions[index].question}</Text>
		<TouchableOpacity style={styles.buttonAnswer} onPress={this._onPressButtonAnswer}>
    <Text>Check Answer</Text>
		</TouchableOpacity>
		</View>)
  :(<View>
    <Text>did you get it right?</Text>
    <Text>Answer : {deck.questions[index].answer}</Text>
	<TouchableOpacity style={styles.buttonQuestion} onPress={this._onPressButtonQuestion}>
   <Text>Hide Answer and see the question.</Text>
	 </TouchableOpacity>
    </View>)
}
    <TouchableOpacity style={styles.correct} onPress={() => this._onPressButtonScore("correct")}>
        <Text >Correct</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.incorrect} onPress={() => this._onPressButtonScore("incorrect")}>
        <Text >Incorrect</Text>
    </TouchableOpacity>)
</View>)
  }
}

const styles = StyleSheet.create({
  quizContainer: {
    padding: 50,
  },
  correct: {
    backgroundColor: 'green',
		borderRadius: 10,
		padding: 5,
		borderWidth: 5,
		
  },
  incorrect: {
    backgroundColor: 'red',
		borderRadius: 10,
		padding: 5,
		borderWidth: 5,
	},
	buttonAnswer: {
		backgroundColor: 'blue',
	},
	buttonQuestion: {
		backgroundColor: 'blue',		
	}

})

export default (StartQuiz)
