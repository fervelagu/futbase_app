/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import BottomTabsNavigator from './src/navigation/BottomTabs.navigator'

export default function App() {
	return (
		<SafeAreaProvider>
			<SafeAreaView edges={['top']} flex={1}>
				<NavigationContainer>
					<BottomTabsNavigator />
				</NavigationContainer>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}
