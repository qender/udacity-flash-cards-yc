import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import AddCard from "./addCard";


class QuizResults extends Component {
	startQuiz = () => {
		const { deck } = this.props.navigation.state.params;
		const { questions } = deck;
		this.props.navigation.navigate(
			'Quiz',
			{
				deck,
				question: questions.length ? questions[0] : undefined
			}
		);
	};

	goToDeck = () => {
		const deckId = this.props.navigation.state.params.deck.id;
		this.props.navigation.navigate( 'Deck', { deckId } );
	};

	render() {
		const { deck } = this.props.navigation.state.params;

		return (
			<View>
				<Text>
					Score: {deck.numCorrect} / {deck.questions.length}
					({ Math.round(deck.numCorrect / deck.questions.length) })
				</Text>

				<TouchableOpacity onPress={() => this.startQuiz()}>
					<Text>Start Over</Text>
				</TouchableOpacity>

				<Text onPress={() => this.goToDeck()}>Back to Deck</Text>
			</View>
		)
	}
}

AddCard.navigationOptions = {
	title: 'Results',
};

export default QuizResults;
