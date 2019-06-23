import { AsyncStorage } from 'react-native';
import { NOTIFICATION_KEY } from './notifications';

const DECKS_KEY = 'flashcards-yc:decks';

// Seed Data
let decks = [
	{
		id: 1,
		name: 'Deck 1',
		questions: [
			{question: 'What is 32 x 3', answer: '96'},
			{question: 'What color is the sky?', answer: 'Blue'},
			{question: 'What is a Docker container?', answer: 'A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.'}
		],
		numCorrect: 0
	},
	{
		id: 2,
		name: 'Deck 2',
		questions: [],
		numCorrect: 0
	}
];


// Deck APIs

export const setInitialData = () => {
	AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));
	AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify({}));
	return decks;
};

export const getDecks = () => {
	return AsyncStorage.getItem(DECKS_KEY).then(JSON.parse);
};

const setDecks = (decks) => {
	AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));
};

export const addDeck = (deckName) => {
	return getDecks().then(decks => {
		const deck = {
			id: Math.max.apply(Math, decks.map(deck => deck.id )) + 1,
			name: deckName,
			questions: [],
			numCorrect: 0
		};

		const updatedDecks = [...decks, deck];
		setDecks(updatedDecks);

		return deck;
	});
};

export const deleteDeck = (deckId) => {
	return getDecks().then(decks => {
		const updatedDecks = decks.filter(deck => deck.id !== deckId);
		setDecks(updatedDecks);
	});
};

export const addCard = (deckId, newQuestion) => {
	return getDecks().then(decks => {
		const deck = decks.find(deck => deck.id === deckId);
		deck.questions = [
			...deck.questions,
			newQuestion
		];
		setDecks(decks);
		return deck;
	});
};

export const markQuestion = (deckId, isCorrect) => {
	return getDecks().then(decks => {
		let deck = decks.find(deck => deck.id === deckId);
		if (isCorrect) {
			deck.numCorrect = deck.numCorrect + 1;
		}
		setDecks(decks);
		return deck;
	});
};

export const resetDeck = (deckId) => {
	return getDecks().then(decks => {
		let deck = decks.find(deck => deck.id === deckId);
		deck.numCorrect = 0;
		setDecks(decks);
		return deck;
	});
};
