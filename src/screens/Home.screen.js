import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MATCH_EXAMPLE } from '../utils/constants'
import { Colors } from '../utils/styles'
import { HeaderMatch } from './../components'

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<HeaderMatch match={MATCH_EXAMPLE} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: Colors.WHITE
	}
})
