import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FanScreen from '../screens/Fan.screen'
import { Colors } from '../utils/styles'

const FanStack = createNativeStackNavigator()
const FanNavigator = () => {
	return (
		<FanStack.Navigator initialRouteName="Fan">
			<FanStack.Screen
				name="Fan"
				component={FanScreen}
				options={{
					headerStyle: {
						backgroundColor: Colors.WHITE
					}
				}}
			/>
		</FanStack.Navigator>
	)
}

export default FanNavigator
