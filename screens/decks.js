import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { getDecks, setInitialData } from '../utils/_DATA';
import { setLocalNotification } from '../utils/notifications';
import Colors from '../constants/Colors';
import BasicDeckInfo from "../components/basicDeckInfo";
import { NavigationEvents } from 'react-navigation';


class Decks extends Component {
	state = {
		decks:[]
	};

	componentDidMount() {
		this.setDecks();
		setLocalNotification();
	}

	setDecks = () => {
		getDecks().then(decks => {
			if (!decks) {
				this.setState({ decks: setInitialData() });
			} else {
				this.setState({ decks });
			}
		});
	};

	render() {
		const { decks } = this.state;

		return (
			<View style={styles.container}>
				<NavigationEvents onWillFocus={() => this.setDecks()} />

				{decks.map(deck => (
					<TouchableOpacity
						key={deck.id}
						onPress={() => this.props.navigation.navigate(
						  'Deck',
						  { deck }
						)}
						style={styles.deck}
				  	>
						<BasicDeckInfo deck={deck} />
					</TouchableOpacity>
				))}

				{!decks.length && <View style={styles.noDecksContainer}>
					<Text style={styles.noDecksText}>You don't have any decks!</Text>
				</View>}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	noDecksContainer: {
		justifyContent: 'center',
		alignContent: 'center',
		height: '100%'
	},
	noDecksText: {
		fontSize: 20,
		color: Colors.grey,
		textAlign: 'center'
	},
	deck: {
		backgroundColor: Colors.lightGrey,
		borderRadius: 8,
		padding: 20,
		marginTop: 20
	}
});

Decks.navigationOptions = {
  	title: 'My Decks'
};

export default Decks;
