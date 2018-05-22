
const __STATE__FLASHCARD__ = '__STATE_FLASHCARD__'
import {AsyncStorage} from 'react-native'

export const loadState = async() => {
  const serialized = await AsyncStorage.getItem(__STATE__FLASHCARD__)
  let initialState = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }
  if(serialized){
    console.log(serialized)
    return initialState = JSON.parse(serialized)
  }
  return initialState

}

export const saveState = (state) => {
console.log("state",state)
AsyncStorage.setItem(__STATE__FLASHCARD__, state)

}