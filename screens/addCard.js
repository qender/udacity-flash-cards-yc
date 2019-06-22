import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity
} from 'react-native';
import { addCard } from "../utils/_DATA";


class AddCard extends Component {
	state = {
		questionText: '',
		answerText: '',
		error: ''
	};

	addQuestionToDeck = () => {
		const { questionText, answerText } = this.state;
		const { deckId } = this.props.navigation.state.params;

		if (questionText && answerText) {
			const newQuestion = {
				question: questionText,
				answer: answerText
			};

			addCard(deckId, newQuestion);
			this.setState({ questionText: '', answerText: '', error: '' });
			this.props.navigation.navigate('Deck', { deckId });
		} else {
			this.setState({
				error: 'Oops! Make sure to enter text for both the question and answer.'
			});
		}
	};

	updateQuestionText = (questionText) => {
		this.setState({ questionText });
	};

	updateAnswerText = (answerText) => {
		this.setState({ answerText });
	};

	render() {
		const { questionText, answerText, error } = this.state;

		return (
			<View>
				<TextInput
					placeholder="Question"
					value={questionText}
					onChangeText={(text) => this.updateQuestionText(text)}
				/>
				<TextInput
					placeholder="Answer"
					value={answerText}
					onChangeText={(text) => this.updateAnswerText(text)}
				/>
				<Text>{error}</Text>
				<TouchableOpacity onPress={() => this.addQuestionToDeck()}>
					<Text>Submit</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

AddCard.navigationOptions = {
	title: 'Add Card',
};

export default AddCard;
