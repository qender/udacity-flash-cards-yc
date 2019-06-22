import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import {deleteDeck, getDecks} from '../utils/_DATA';


class Deck extends Component {
	static navigationOptions = ({ navigation }) => {
		const deck = getDecks().find(deck => deck.id === navigation.state.params.deckId);

		return {
		  	title: deck.name
		}
	};

	navigateToAddCard = () => {
		this.props.navigation.navigate( 'AddCard', { deckId: this.props.navigation.state.params.deckId } );
	};

	startQuiz = () => {
		const deck = this.getDeck();
		const { questions } = deck;
		this.props.navigation.navigate(
			'Quiz',
			{
				deck,
				question: questions.length ? questions[0] : undefined
			}
		);
	};

	getDeck = () => {
		const { deckId } = this.props.navigation.state.params;
		return getDecks().find(deck => deck.id === deckId);
	};

	deleteDeck = () => {
		const { deckId } = this.props.navigation.state.params;
		deleteDeck(deckId);
		this.props.navigation.navigate('Decks');
	};

	render() {
		const deck = this.getDeck();

		return (
			<View>
				<Text>{deck.name}</Text>
				<Text>{deck.questions.length} Cards</Text>

				<TouchableOpacity onPress={() => this.navigateToAddCard()}>
					<Text>Add Card</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => this.startQuiz()}>
					<Text>Start Quiz</Text>
				</TouchableOpacity>

				<Text onPress={() => this.deleteDeck()}>Delete Deck</Text>
			</View>
		)
	}
}

export default Deck;
