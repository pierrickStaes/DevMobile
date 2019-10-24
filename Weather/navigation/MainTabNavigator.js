import HomePage from '../pages/HomePage';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import SettingsPage from '../pages/SettingsPage';
import FavoritesPage from '../pages/FavoritesPage';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import AddFavoritesPage from '../pages/AddFavoritesPage';

const FavoritesNavigator = createStackNavigator(
    {
        FavoritesPage: {
            screen: FavoritesPage
        },
        AddFavorites:{
            screen: AddFavoritesPage
        }
    },
    {
        initialRouteName: 'FavoritesPage',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#7cbac2',
            },
            headerTintColor: 'white'
        }
    }
)

const tabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomePage,
            navigationOptions: {
                tabBarLabel:'Accueil',
                tabBarIcon:({tintColor})=> (
                    <Icon style={[{color: tintColor}]} size ={25} name ={'ios-home'} />
                ),
                barStyle: {backgroundColor: '#496c89'}
            }
        },
        FavoritesPage: {
            screen: FavoritesNavigator,
            navigationOptions: {
                tabBarLabel:'Favoris',
                tabBarIcon:({tintColor})=> (
                    <Icon style={[{color: tintColor}]} size ={25} name ={'ios-star'} />
                ),
                barStyle: {backgroundColor: '#496c89'}
            }
        },
        Settings: {
            screen : SettingsPage,
            navigationOptions: {
                tabBarLabel:'Paramètres',
                tabBarIcon:({tintColor})=> (
                    <Icon style={[{color: tintColor}]} size ={25} name ={'ios-settings'} />
                ),
                barStyle: {backgroundColor: '#496c89'}
            }
        }
    },
    {
        initialRouteName: 'Home',
        activeColor:'#7cbac2',
        inactiveColor:'#3684c5',
        labelStyle: {textAlign: 'center'}
    }
);

export default tabNavigator;