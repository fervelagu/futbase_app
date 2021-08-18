import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MatchesNavigator from './Matches.navigator'
import FanNavigator from './Fan.navigator'
import HomeNavigator from './Home.navigator'
import RewardsNavigator from './Rewards.navigator'
import TeamNavigator from './Team.navigator'

const BottomTabs = createMaterialBottomTabNavigator()
const BottomTabsNavigator = () => {
	return (
		<BottomTabs.Navigator initialRouteName={'Home'}>
			<BottomTabs.Screen
				name={'Matches'}
				component={MatchesNavigator}
				options={{
					tabBarIcon: () => <Icon name={'soccer'} size={24} color={'white'} />
				}}
			/>
			<BottomTabs.Screen
				name={'Fan'}
				component={FanNavigator}
				options={{
					tabBarIcon: () => <Icon name={'account'} size={24} color={'white'} />
				}}
			/>
			<BottomTabs.Screen
				name={'Home'}
				component={HomeNavigator}
				options={{
					tabBarIcon: () => <Icon name={'home'} size={24} color={'white'} />
				}}
			/>
			<BottomTabs.Screen
				name={'Rewards'}
				component={RewardsNavigator}
				options={{
					tabBarIcon: () => (
						<Icon name={'trophy-variant'} size={24} color={'white'} />
					)
				}}
			/>
			<BottomTabs.Screen
				name={'Team'}
				component={TeamNavigator}
				options={{
					tabBarIcon: () => (
						<Icon name={'account-group'} size={24} color={'white'} />
					)
				}}
			/>
		</BottomTabs.Navigator>
	)
}

export default BottomTabsNavigator
