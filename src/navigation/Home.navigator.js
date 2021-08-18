import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/Home.screen'
// import { Colors } from '../utils/styles'

const HomeStack = createNativeStackNavigator()
const HomeNavigator = () => {
	// const headerOptions = {
	// 	headerTintColor: Colors.WHITE,
	// 	headerStyle: {
	// 		backgroundColor: Colors.TEAM_PRIMARY,
	// 		borderTopWidth: 0
	// 	}
	// }

	return (
		<HomeStack.Navigator initialRouteName="home">
			<HomeStack.Screen
				name="home"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
		</HomeStack.Navigator>
	)
}

export default HomeNavigator
