import React from 'react';
import {StyleSheet, Text} from "react-native";
import Colors from "../constants/Colors";

export default function TextButton (props) {
	return (
		<Text
			onPress={() => props.onPress()}
			style={styles.textBtn}
		>
			{props.text}
		</Text>
	)
};

const styles = StyleSheet.create({
	textBtn: {
		textAlign: 'center',
		color: Colors.grey,
		fontSize: 17,
		marginTop: 8,
		marginBottom: 8
	}
});
