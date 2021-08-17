import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { Colors } from '../../utils/styles'

const Loading = ({ message = 'loading' }) => {
	return (
		<View style={styles.container}>
			<View style={styles.spinner}>
				<ActivityIndicator size="large" color={Colors.WHITE} animating={true} />
				<Text style={styles.text}>{message}</Text>
			</View>
		</View>
	)
}

export default Loading

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.BLACK_TRA_HIGH,
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 1,
		zIndex: 9999
	},
	spinner: {
		borderRadius: 10,
		height: 140,
		paddingVertical: 50,
		width: 140
	},
	text: {
		color: Colors.WHITE,
		fontSize: 14,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 12
	}
})
