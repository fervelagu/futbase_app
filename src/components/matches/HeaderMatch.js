import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { getTeamLogo } from '../../utils/styles/image'
import { Colors } from '../../utils/styles'
import { Loading } from '../index'

const HeaderMatch = ({ match }) => {
	if (!match) return <Loading />
	const {
		tournament,
		stadium,
		local_asset,
		local_team_name,
		score_local,
		score_visitor,
		visitor_asset,
		visitor_team_name,
		date_string
	} = match

	return (
		<View style={styles.container}>
			<View style={styles.wrap}>
				<Text style={styles.headerTitleLabel}>{tournament}</Text>
			</View>
			<View style={styles.wrap}>
				<Text style={styles.headerSubTitleLabel} numberOfLines={1}>
					{stadium}
				</Text>
			</View>
			<View style={styles.wrapIcons}>
				<TouchableOpacity style={styles.matchOption}>
					<Image style={styles.teamIcon} source={getTeamLogo(local_asset)} />
					<Text style={styles.headerTeamLabel} numberOfLines={1}>
						{local_team_name.toUpperCase()}
					</Text>
				</TouchableOpacity>

				<View style={styles.matchOption}>
					<View style={styles.scoreView}>
						<Text style={styles.scoreLabel}>
							{score_local} - {score_visitor}
						</Text>
					</View>
				</View>

				<TouchableOpacity style={styles.matchOption}>
					<Image style={styles.teamIcon} source={getTeamLogo(visitor_asset)} />
					<Text style={styles.headerTeamLabel} numberOfLines={1}>
						{visitor_team_name.toUpperCase()}
					</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.wrap}>
				<Text style={styles.headerSubTitleLabel}>{date_string}</Text>
			</View>
		</View>
	)
}

export default HeaderMatch

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.TEAM_SECONDARY_OPACITY,
		alignSelf: 'center',
		borderRadius: 8,
		padding: 8,
		margin: 8
	},
	wrap: {
		alignSelf: 'center',
		paddingVertical: 8
	},
	wrapIcons: {
		flexDirection: 'row',
		alignSelf: 'center'
	},
	headerTitleLabel: {
		color: Colors.WHITE,
		fontSize: 14
	},
	headerSubTitleLabel: {
		alignItems: 'center',
		color: Colors.WHITE,
		fontSize: 12
	},
	matchOption: {
		alignItems: 'center',
		justifyContent: 'center',
		width: widthPercentageToDP('30%')
	},
	teamIcon: {
		alignSelf: 'center',
		height: 45,
		width: 45
	},
	headerTeamLabel: {
		color: Colors.WHITE,
		fontWeight: 'bold',
		fontSize: 12,
		paddingTop: 5
	},
	scoreView: {
		alignSelf: 'center'
	},
	scoreLabel: {
		color: Colors.WHITE,
		fontSize: 28,
		fontWeight: 'bold',
		paddingTop: 7
	}
})
