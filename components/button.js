import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import Colors from "../constants/Colors";

export default function Button (props) {
	return (
		<TouchableOpacity
			onPress={() => props.onPress()}
			style={props.btnType === 'primary' ? styles.primaryBtn : styles.secondaryBtn}
		>
			<Text
				style={props.btnType === 'primary' ? styles.primaryBtnText : styles.secondaryBtnText}
			>
				{props.text}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	primaryBtn: {
		backgroundColor: Colors.tintColor,
		borderRadius: 8,
		padding: 12,
		width: 150,
		height: 45,
		color: Colors.white,
		textAlign: 'center',
		marginBottom: 15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	secondaryBtn: {
		backgroundColor: Colors.lightGrey,
		borderRadius: 8,
		height: 45,
		padding: 12,
		width: 150,
		textAlign: 'center',
		marginBottom: 15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	primaryBtnText: {
		color: Colors.white,
		fontSize: 16,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	secondaryBtnText: {
		fontSize: 16,
		textAlign: 'center',
		fontWeight: 'bold'
	}
});
