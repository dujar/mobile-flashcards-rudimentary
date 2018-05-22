import React, { Component } from 'react';
import {View, TouchableOpacity, Text} from 'react-native'

class StartQuiz extends Component {

  constructor(){
    super()
    this._onPressButtonAnswer = this._onPressButtonAnswer.bind(this)
    this._onPressButtonScore = this._onPressButtonScore.bind(this)
  }
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
    if(val==="correct") { val = 1}
    this.setState((state) => ({
      ...state,
      scoreBoard: {
        ...state.scoreBoard,
        score: state.scoreBoard.score + num,
        questions: {
          [this.state.currentQuestion]: num
        }
      }

    }))
  }
  render(){

    const {scoreBoard: {score}, currentQuestion, answer, question} = this.state
// from params

const deck = this.props.navigation.getParam('deck',"did not find it")
const questionLength = deck.questions.length
const index = currentQuestion - 1
//

if(question > questionLength){
  return (
    <View>
      <Text>Score : {score} --- </Text>
    </View>
  )
}

    return(
<View>

<Text> Question : {currentQuestion} out of {questionLength}</Text>

{ !answer
  ? <Text> {deck.questions[index].question} </Text>
  : (<View>
    <Text> did you get it right?</Text>
    <Text>Answer : {deck.questions[index].answer} </Text>
    </View>)
}

{ !answer
? (<TouchableOpacity onPress={this._onPressButtonAnswer}>
        <Text>Check Answer</Text>
  </TouchableOpacity>)
: (<TouchableOpacity onPress={this._onPressButtonQuestion}>
   <Text>Hide Answer and see the question.</Text>
  </TouchableOpacity>)
}
    { answer &&
    <View>
    <View>
    <TouchableOpacity onPress={this._onPressButtonScore("correct")}>
        <Text>Correct</Text>
    </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity onPress={this._onPressButtonScore("incorrect")}>
        <Text>Wrong</Text>
    </TouchableOpacity>
    </View>
    </View>
    }
</View>


    )
  }
}


export default (StartQuiz)