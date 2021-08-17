import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import FIcon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Entypo'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MatchesNavigator from './Matches.navigator'
import FanNavigator from './Fan.navigator'
import HomeNavigator from './Home.navigator'
import RewardsNavigator from './Rewards.navigator'
import TeamNavigator from './Team.navigator'
import { Colors } from '../utils/styles'

const BottomTabs = createMaterialBottomTabNavigator()
const BottomTabsNavigator = () => {
	const tabBarStyle = {
		backgroundColor: Colors.TEAM_PRIMARY,
		borderTopWidth: 0
	}

	return (
		<BottomTabs.Navigator initialRouteName="Home" barStyle={tabBarStyle}>
			<BottomTabs.Screen
				name="Matches"
				component={MatchesNavigator}
				options={{
					tabBarIcon: () => <MCIcon name="soccer" size={24} color={'white'} />
				}}
			/>
			<BottomTabs.Screen
				name="Fan"
				component={FanNavigator}
				options={{
					tabBarIcon: () => <FIcon name="user" size={24} color={'white'} />
				}}
			/>
			<BottomTabs.Screen
				name="Home"
				component={HomeNavigator}
				options={{
					tabBarIcon: () => <Icon name="home" size={24} color={'white'} />
				}}
			/>
			<BottomTabs.Screen
				name="Rewards"
				component={RewardsNavigator}
				options={{
					tabBarIcon: () => <Icon name="star" size={24} color={'white'} />
				}}
			/>
			<BottomTabs.Screen
				name="Team"
				component={TeamNavigator}
				options={{
					tabBarIcon: () => <FIcon name="users" size={24} color={'white'} />
				}}
			/>
		</BottomTabs.Navigator>
	)
}

export default BottomTabsNavigator
