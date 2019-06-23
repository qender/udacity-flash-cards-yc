import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import Colors from "../constants/Colors";

export default function BasicDeckInfo (props) {
	const { deck } = props;

	return (
		<View>
			<Text style={styles.deckName}>{deck.name}</Text>
			<Text style={styles.numCards}>{deck.questions.length} cards</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	deckName: {
		textAlign: 'center',
		fontSize: 24
	},
	numCards: {
		textAlign: 'center',
		marginTop: 8,
		color: Colors.grey,
		fontSize: 16
	}
});
