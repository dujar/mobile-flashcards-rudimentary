import {loadState, saveState} from './localStorage'
import {
  ADD_DECK_TITLE,
  GET_DECK,
  GET_DECKS,
  ADD_CARD_TO_DECK } from './actions'

export const saveDeckTitle = (title) => {
console.log("title:",title)
return {
  type: ADD_DECK_TITLE,
  title
}
}

export const getDecks = () => {

  return {
    type: GET_DECKS
  }
}

export const addCardToDeck = (title,card) => {
  return {
    type: ADD_CARD_TO_DECK,
    title,
    card
  }
}
export const getDeck = (id) => {
  return {
    type: GET_DECK,
    id
  }
}