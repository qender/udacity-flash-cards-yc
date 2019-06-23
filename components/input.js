import React from 'react';
import {StyleSheet, TextInput} from "react-native";
import Colors from "../constants/Colors";

export default function Button (props) {
	return (
		<TextInput
			placeholder={props.placeholder}
			value={props.value}
			onChangeText={ (text) => props.onChangeText(text) }
			style={styles.textInput}
			autoFocus={props.autoFocus}
		/>
	);
}

const styles = StyleSheet.create({
	textInput: {
		height: 50,
		borderColor: Colors.lightGrey,
		borderWidth: 2,
		borderRadius: 10,
		padding: 15,
		width: '80%',
		marginBottom: 10
	}
});
