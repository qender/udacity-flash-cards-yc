import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/tabBarIcon';
import Decks from '../screens/decks';
import Deck from '../screens/deck';
import AddDeck from '../screens/addDeck';
import AddCard from '../screens/addCard';
import Quiz from '../screens/quiz';
import QuizResults from '../screens/quizResults';


const HomeStack = createStackNavigator({
    Decks,
    Deck,
    AddCard,
    Quiz,
    QuizResults
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Decks',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            library="material-community"
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `cards${focused ? '' : '-outline'}`
                    : 'cards'
            }
        />
    ),
};

const AddDeckStack = createStackNavigator({
    AddDeck: AddDeck
});

AddDeckStack.navigationOptions = {
    tabBarLabel: 'Add Deck',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            library="ionicons"
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
        />
    ),
};

export default createBottomTabNavigator({
    HomeStack,
    AddDeckStack
});
