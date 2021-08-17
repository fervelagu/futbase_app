import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../utils/styles'

export default function MatchesScreen() {
	return (
		<View style={styles.container}>
			<Icon name="soccer" size={18} color={Colors.TEAM_PRIMARY} />
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
