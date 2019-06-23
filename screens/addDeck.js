import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	KeyboardAvoidingView
} from 'react-native';
import { addDeck } from '../utils/_DATA';
import Button from "../components/button";
import Input from '../components/input';
import ErrorText from '../components/errorText';


class AddDeck extends Component {
	state = {
		deckName: '',
		error: ''
	};

	createNewDeck = () => {
		const { deckName } = this.state;
		if (deckName) {
			addDeck(deckName).then(deck => {
				this.setState({ deckName: '', error: '' });
				this.props.navigation.navigate('Deck', { deck });
			});
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
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<Text style={styles.askText}>What is the title of your new deck?</Text>
				<Input
					placeholder="Deck title"
					value={deckName}
					onChangeText={this.updateDeckName}
					autoFocus={true}
				/>

				<ErrorText error={error} />

				<Button
					onPress={this.createNewDeck}
					text="Create Deck"
					btnType="primary"
				/>
			</KeyboardAvoidingView>
		)
	}
}

AddDeck.navigationOptions = {
  title: 'Add Deck',
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		alignItems: 'center',
		paddingTop: '20%'
	},
	askText: {
		fontSize: 16,
		marginBottom: 30
	}
});

export default AddDeck;
