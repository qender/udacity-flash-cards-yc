import React from 'react';
import { Platform } from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import Decks from '../screens/decks';
import Deck from '../screens/deck';
import AddDeck from '../screens/addDeck';
import AddCard from '../screens/addCard';
import Quiz from '../screens/quiz';
import QuizResults from '../screens/quizResults';
import Colors from '../constants/Colors';


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
        <MaterialCommunityIcons
            focused={focused}
            size={26}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            name={
                Platform.OS === 'ios'
                    ? `cards${focused ? '' : '-outline'}`
                    : 'cards'
            }
        />
    ),
};

const AddDeckStack = createStackNavigator({
    // Links: LinksScreen,
    AddDeck: AddDeck
});

AddDeckStack.navigationOptions = {
    tabBarLabel: 'Add Deck',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
        />
    ),
};

// const SettingsStack = createStackNavigator({
//     Settings: SettingsScreen,
// });
//
// SettingsStack.navigationOptions = {
//     tabBarLabel: 'Settings',
//     tabBarIcon: ({ focused }) => (
//         <TabBarIcon
//             focused={focused}
//             name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//         />
//     ),
// };

export default createBottomTabNavigator({
    HomeStack,
    AddDeckStack,
    // SettingsStack,
});
