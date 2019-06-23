import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { resetDeck } from '../utils/_DATA';
import { clearLocalNotification, setLocalNotification } from '../utils/notifications';
import Colors from "../constants/Colors";
import Button from '../components/button';
import TextButton from '../components/textButton';


class QuizResults extends Component {
	componentDidMount() {
		clearLocalNotification().then(setLocalNotification)
	}

	startQuiz = () => {
		const { deck } = this.props.navigation.state.params;
		const { questions } = deck;
		resetDeck(deck.id).then(() => {
			this.props.navigation.navigate(
				'Quiz',
				{
					deck,
					question: questions.length ? questions[0] : undefined
				}
			);
		});
	};

	goToDeck = () => {
		const deckId = this.props.navigation.state.params.deck.id;
		resetDeck(deckId).then(deck => {
			this.props.navigation.navigate( 'Deck', { deck } );
		});
	};

	goToAllDecks = () => {
		const deckId = this.props.navigation.state.params.deck.id;
		resetDeck(deckId).then(deck => {
			this.props.navigation.navigate( 'Decks' );
		});
	};

	render() {
		const { deck } = this.props.navigation.state.params;

		const score = Math.round(deck.numCorrect / deck.questions.length * 100);

		return (
			<View style={styles.container}>
				<Text style={score > 60 ? styles.greenScoreText : styles.redScoreText}>
					{deck.numCorrect} / {deck.questions.length} ({ score }%)
				</Text>
				<Text style={styles.greyText}>Correct</Text>

				<Button
					onPress={this.startQuiz}
					text="Start Over"
					btnType="primary"
				/>

				<Button
					onPress={this.goToDeck}
					text="Back to Deck"
					btnType="secondary"
				/>

				<TextButton onPress={this.goToAllDecks} text="All Decks" />
			</View>
		)
	}
}

QuizResults.navigationOptions = {
	title: 'Results',
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		alignItems: 'center',
		paddingTop: '20%'
	},
	greyText: {
		color: Colors.grey,
		fontSize: 16,
		marginTop: 8,
		marginBottom: 40
	},
	greenScoreText: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		color: Colors.green
	},
	redScoreText: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		color: Colors.red
	}
});

export default QuizResults;
