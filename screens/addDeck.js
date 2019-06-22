import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	TextInput
} from 'react-native';
import { addDeck } from '../utils/_DATA';


class AddDeck extends Component {
	state = {
		deckName: '',
		error: ''
	};

	createNewDeck = () => {
		const { deckName } = this.state;
		if (deckName) {
			const deck = addDeck(deckName);
			this.setState({ deckName: '', error: '' });
			this.props.navigation.navigate('Deck', { deckId: deck.id });
		} else {
			this.setState({
				error: 'Oops! Please enter a deck name.'
			});
		}
	};

	updateDeckName = (deckName) => {
		this.setState({ deckName });
	};

	render() {
		const { deckName, error } = this.state;

		return (
			<View>
				<Text>What is the title of your new deck?</Text>
				<TextInput
					placeholder="Deck title"
					value={deckName}
					onChangeText={ (text) => this.updateDeckName(text) }
				/>
				<Text>{error}</Text>
				<TouchableOpacity>
					<Text onPress={() => this.createNewDeck()}>Create Deck</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

AddDeck.navigationOptions = {
  title: 'Add Deck',
};

export default AddDeck;
