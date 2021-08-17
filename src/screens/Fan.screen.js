import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../utils/styles'

export default function FanScreen() {
	return (
		<View style={styles.container}>
			<Icon name="user" size={18} color={Colors.TEAM_PRIMARY} />
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
