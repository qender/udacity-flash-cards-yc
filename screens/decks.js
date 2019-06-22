import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { getDecks } from '../utils/_DATA';


class Decks extends Component {
	state = {
		decks:[]
	};

	componentDidMount() {
		this.setDecks();
		this.props.navigation.addListener('willFocus', this.setDecks);
	}

	setDecks = () => {
		this.setState({ decks: getDecks() });
	};

	render() {
		const { decks } = this.state;

		return (
			<View>
				{decks.map(deck => (
					<TouchableOpacity
						key={deck.id}
						onPress={() => this.props.navigation.navigate(
						  'Deck',
						  { deckId: deck.id }
						)}
				  	>
						<Text>{deck.name}</Text>
						<Text>{deck.questions.length}</Text>
					</TouchableOpacity>
				))}
			</View>
		)
	}
}

Decks.navigationOptions = {
  	header: null,
};

export default Decks;
