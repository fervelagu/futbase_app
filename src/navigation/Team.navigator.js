import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TeamScreen from '../screens/Team.screen'
import { Colors } from '../utils/styles'

const TeamStack = createNativeStackNavigator()
const TeamNavigator = () => {
	return (
		<TeamStack.Navigator initialRouteName="Team">
			<TeamStack.Screen
				name="Team"
				component={TeamScreen}
				options={{
					headerStyle: {
						backgroundColor: Colors.WHITE
					}
				}}
			/>
		</TeamStack.Navigator>
	)
}

export default TeamNavigator
