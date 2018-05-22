import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewDeck from './NewDeck'

import {Provider} from 'react-redux'
import logger from 'redux-logger'
import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import decksReducer from './decksReducer'
import NewCard from './NewCard'
import StartQuiz from './StartQuiz'
// import Decks from './Decks'
import {StackNavigator, TabNavigator} from './Navigator'

const middleware = [logger]
const reducer = combineReducers({
decks: decksReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,composeEnhancers(applyMiddleware(...middleware))
)



export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <TabNavigator/>
      {/* <View style={styles.container}> */}
      {/* <Text>working like hell</Text> */}
        {/* <NewDeck/> */}
        {/* <Decks/> */}
        {/* <TabNavigator/> */}
        {/* <NewCard deck={"React"}/> */}
        {/* <StartQuiz/> */}
        {/* <Nav/> */}
      {/* </View> */}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
