import {loadState} from './localStorage'
import {ADD_DECK_TITLE, ADD_CARD_TO_DECK} from './actions'

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


const decksReducer = (state = initialState,action) => {

  switch(action.type ) {
    case ADD_CARD_TO_DECK:
    return {
      ...state,
      [action.title] : {
        ...state[action.title],
        questions: state[action.title].questions.concat(action.card)
      }
    }
    case ADD_DECK_TITLE:
    return {
      ...state,
      [action.title]:{
        title: action.title,
        questions:[]
      }
    }
    default:
    return state

  }
}

export default decksReducer