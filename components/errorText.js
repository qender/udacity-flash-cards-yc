import React from 'react';
import {StyleSheet, Text} from "react-native";
import Colors from "../constants/Colors";

export default function ErrorText (props) {
	return (
		<Text style={styles.errorText}>{props.error}</Text>
	);
}

const styles = StyleSheet.create({
	errorText: {
		color: Colors.red,
		marginTop: 10,
		marginBottom: 20,
		textAlign: 'center'
	}
});
