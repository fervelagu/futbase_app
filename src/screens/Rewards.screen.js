import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { Colors } from '../utils/styles'

export default function RewardsScreen() {
	return (
		<View style={styles.container}>
			<Icon name="star" size={18} color={Colors.TEAM_PRIMARY} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
