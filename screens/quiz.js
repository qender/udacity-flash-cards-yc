import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import { markQuestion } from '../utils/_DATA';


class Quiz extends Component {
	state = {
		showAnswer: false
	};

	toggleShowAnswer = () => {
		this.setState({ showAnswer: !this.state.showAnswer });
	};

	markQuestion = (isCorrect) => {
		const { deck } = this.props.navigation.state.params;
		const updatedDeck = markQuestion(deck.id, isCorrect);
		console.log('updatedDeck', updatedDeck);
		this.goToNextQuestion(updatedDeck);
	};

	goToNextQuestion = (deck) => {
		const questionIndex = this.getQuestionIndex();
		const nextQuestionIndex = deck.questions.length > questionIndex + 1 ? questionIndex + 1 : 0;
		this.props.navigation.navigate(
			'Quiz',
			{
				deck,
				question: deck.questions[nextQuestionIndex]
			}
		);
	};

	getQuestionIndex = () => {
		const { deck, question } = this.props.navigation.state.params;
		return deck.questions.indexOf(question);
	};

	render() {
		const { deck, question } = this.props.navigation.state.params;
		const { showAnswer } = this.state;

		console.log('deck.numCorrect', deck.numCorrect);

		return (
			<View>
				{question && <View>
					<Text>Questions Remaining: {deck.questions.length - this.getQuestionIndex()}</Text>

					{!showAnswer && <View>
						<Text>{question.question}</Text>
						<Text onPress={() => this.toggleShowAnswer()}>Answer</Text>
					</View>}

					{showAnswer && <View>
						<Text>{question.answer}</Text>
						<Text onPress={() => this.toggleShowAnswer()}>Question</Text>
					</View>}

					<TouchableOpacity onPress={() => this.markQuestion(true)}>
						<Text>Correct</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => this.markQuestion(false)}>
						<Text>Incorrect</Text>
					</TouchableOpacity>
				</View>}

				{!question && <View>
					<Text>Sorry, you cannot take this quiz because there are no cards in the deck :(</Text>
				</View>}
			</View>
		)
	}
}

Quiz.navigationOptions = {
	title: 'Quiz',
};

export default Quiz;
