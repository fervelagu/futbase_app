import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MatchesSreen from '../screens/Matches.screen'
import { Colors } from '../utils/styles'

const MatchStack = createNativeStackNavigator()
const MatchesNavigator = () => {
	return (
		<MatchStack.Navigator initialRouteName="Matches">
			<MatchStack.Screen
				name="Matches"
				component={MatchesSreen}
				options={{
					headerStyle: {
						backgroundColor: Colors.WHITE
					}
				}}
			/>
		</MatchStack.Navigator>
	)
}

export default MatchesNavigator
