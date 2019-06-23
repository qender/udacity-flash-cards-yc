import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import { markQuestion } from '../utils/_DATA';
import {NavigationActions, StackActions} from "react-navigation";
import Colors from "../constants/Colors";
import TextButton from '../components/textButton';
import Button from '../components/button'


class Quiz extends Component {
	state = {
		showAnswer: false
	};

	toggleShowAnswer = () => {
		this.setState({ showAnswer: !this.state.showAnswer });
	};

	markQuestion = (isCorrect) => {
		const { deck } = this.props.navigation.state.params;
		markQuestion(deck.id, isCorrect).then(updatedDeck => {
			this.goToNextQuestion(updatedDeck);
		});
	};

	goToNextQuestion = (deck) => {
		const questionIndex = this.getQuestionIndex();
		this.setState({ showAnswer: false });

		if (deck.questions.length > questionIndex + 1) {
			this.props.navigation.navigate(
				'Quiz',
				{
					deck,
					question: deck.questions[questionIndex + 1]
				}
			);
		} else {
			const resetAction = StackActions.reset({
				index: 0,
				actions: [NavigationActions.navigate({ routeName: 'QuizResults', params: { deck } })],
			});
			this.props.navigation.dispatch(resetAction);
		}
	};

	getQuestionIndex = () => {
		const { deck, question } = this.props.navigation.state.params;
		return deck.questions.indexOf(question);
	};

	render() {
		const { deck, question } = this.props.navigation.state.params;
		const { showAnswer } = this.state;

		return (
			<View style={styles.container}>
				{question && <View>
					<Text style={styles.remainingQuestions}>
						Questions Remaining: {deck.questions.length - this.getQuestionIndex()}
					</Text>

					{!showAnswer && <View>
						<Text style={styles.questionText}>{question.question}</Text>
						<TextButton onPress={this.toggleShowAnswer} text="Answer" />
					</View>}

					{showAnswer && <View>
						<Text style={styles.answerText}>{question.answer}</Text>
						<TextButton onPress={this.toggleShowAnswer} text="Question" />
					</View>}

					<View style={styles.buttons}>
						<Button
							onPress={() => this.markQuestion(true)}
							text="Correct"
							btnType="primary"
						/>

						<Button
							onPress={() => this.markQuestion(false)}
							text="Incorrect"
							btnType="secondary"
						/>
					</View>
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


const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		alignItems: 'center',
		paddingTop: '20%'
	},
	remainingQuestions: {
		color: Colors.grey,
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 40
	},
	questionText: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	answerText: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		color: Colors.tintColor
	},
	buttons: {
		marginTop: 50,
		alignItems: 'center'
	}
});

export default Quiz;
