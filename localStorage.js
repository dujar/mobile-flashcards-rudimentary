
import {AsyncStorage} from 'react-native'
const __STATE__FLASHCARD__ = '@REDUX__STATE_FLASHCARD__'

export const loadState = async() => {
				
				let initialState = {fab : {title: 'fab', questions:[]}}

				try {

  const serializedState = await AsyncStorage.getItem(__STATE__FLASHCARD__)
			const keys = await 	AsyncStorage.getAllKeys()
				console.log("keys:",keys)
				console.log("serialized async storage",serializedState)
  if(serializedState === null){
					return initialState
  }
    return JSON.parse(serializedState)
				} catch (err) {
				return initialState
				}

}

export const saveState = async (state) => {
try {
				const serializedState = JSON.stringify(state)
						const resp	=	await AsyncStorage.setItem(__STATE__FLASHCARD__, serializedState)
				console.log("current state saved response", resp)
				console.log("current state saved SERIALIZED", serializedState )
} catch (err) {
console.log("error saving state to async storage:", err)
}
}
