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

export const getDecks = () => {
	return decks;
};

export const addDeck = (deckName) => {
	const deck = {
		id: Math.max.apply(Math, decks.map(deck => deck.id )) + 1,
		name: deckName,
		questions: [],
		numCorrect: 0
	};

	decks = [...decks, deck];
	return deck;
};

export const deleteDeck = (deckId) => {
	decks = decks.filter(deck => deck.id !== deckId);
};

export const addCard = (deckId, newQuestion) => {
	const deck = decks.find(deck => deck.id === deckId);
	deck.questions = [
		...deck.questions,
		newQuestion
	];
};

export const markQuestion = (deckId, isCorrect) => {
	let deck = decks.find(deck => deck.id === deckId);
	if (isCorrect) {
		deck.numCorrect = deck.numCorrect + 1;
	}
	return deck;
};
