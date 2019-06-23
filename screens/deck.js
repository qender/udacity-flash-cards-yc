import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {deleteDeck} from '../utils/_DATA';
import BasicDeckInfo from "../components/basicDeckInfo";
import Button from '../components/button';
import TextButton from '../components/textButton';


class Deck extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.state.params.deck.name
		}
	};

	navigateToAddCard = () => {
		this.props.navigation.navigate( 'AddCard', { deckId: this.props.navigation.state.params.deck.id } );
	};

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

	deleteDeck = () => {
		const { deck } = this.props.navigation.state.params;
		deleteDeck(deck.id).then(() => {
			this.props.navigation.navigate('Decks');
		});
	};

	render() {
		const { deck } = this.props.navigation.state.params;

		return (
			<View style={styles.container}>
				<BasicDeckInfo deck={deck} />

				<View style={styles.buttons}>
					<Button
						onPress={this.navigateToAddCard}
						text="Add Card"
						btnType="primary"
					/>

					<Button
						onPress={this.startQuiz}
						text="Start Quiz"
						btnType="secondary"
					/>

					<TextButton
						onPress={this.deleteDeck}
						text="Delete Deck"
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		alignItems: 'center',
		paddingTop: '20%'
	},
	buttons: {
		marginTop: 100
	}
});

export default Deck;
