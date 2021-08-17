import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RewardsScreen from '../screens/Rewards.screen'
import { Colors } from '../utils/styles'

const RewardsStack = createNativeStackNavigator()
const RewardsNavigator = () => {
	return (
		<RewardsStack.Navigator initialRouteName="Rewards">
			<RewardsStack.Screen
				name="Rewards"
				component={RewardsScreen}
				options={{
					headerStyle: {
						backgroundColor: Colors.WHITE
					}
				}}
			/>
		</RewardsStack.Navigator>
	)
}

export default RewardsNavigator
