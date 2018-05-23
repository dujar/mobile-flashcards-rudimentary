import {loadState, saveState} from './localStorage'
import {AsyncStorage} from 'react-native'
import {Notifications, Permissions} from 'expo'

const __NOTIFICATION_KEY__ = "@Notification_brainWorkout"




//permission and setting notifications
//

export const createLocalNotification = () =>{
				return {
								title: "test your knowledge",
								body: "don't forget to rock and roll those flashcards",
								ios: {
												sound: true
								},
								android :{
												sound: true,
												priority: 'high',
												sticky: false,
												vibrate: true
								}
				}
}

export const clearLocalNotification = () => {
				return AsyncStorage.removeItem(__NOTIFICATION_KEY__)
				.then(Notifications.cancelAllScheduledNotificationsAsync())
}

export const setLocalNotification = () => {

				AsyncStorage.getItem(__NOTIFICATION_KEY__)
								.then(JSON.parse)
								.then(data => {
												if(data === null){
																Permissions.askAsync(Permissions.NOTIFICATIONS)
																				.then(({status}) =>{
															if(status === 'granted'){	
																Notifications.cancelAllScheduledNotificationsAsync()

																let tomorrow = new Date()
																tomorrow.setDate(tomorrow.getDate()+1)
																tomorrow.setHours(20)
																tomorrow.setMinutes(0)

																Notifications.scheduleLocalNotificationAsync(
																				createLocalNotification(),
																				{
																								time: tomorrow,
																								repeat: 'day'
																				}
																)

																AsyncStorage.setItem(__NOTIFICATION_KEY__, JSON.stringify(true))
																	}
															}
								
								)}
								})
								}

