import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { addCard } from "../utils/_DATA";
import Input from '../components/input';
import Button from '../components/button';
import ErrorText from "../components/errorText";


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

			addCard(deckId, newQuestion).then(deck => {
				this.setState({ questionText: '', answerText: '', error: '' });
				this.props.navigation.navigate('Deck', { deck });
			});
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
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<Input
					placeholder="Question"
					value={questionText}
					onChangeText={this.updateQuestionText}
					autoFocus={true}
				/>
				<Input
					placeholder="Answer"
					value={answerText}
					onChangeText={this.updateAnswerText}
					autoFocus={false}
				/>

				<ErrorText error={error} />

				<Button
					onPress={this.addQuestionToDeck}
					text="Submit"
					btnType="primary"
				/>
			</KeyboardAvoidingView>
		)
	}
}

AddCard.navigationOptions = {
	title: 'Add Card',
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		alignItems: 'center',
		paddingTop: '20%'
	}
});

export default AddCard;
