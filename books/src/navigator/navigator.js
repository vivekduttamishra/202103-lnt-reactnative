
import React,{useState} from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';



import BookListScreen from '../screens/book-list-screen';
import BookAddScreen from '../screens/book-add-screen';
import BookDetailsScreen from '../screens/book-details-screen';
import HomeScreen from '../screens/home-screen';




let navigator= createStackNavigator(
    //list of of my screens
    {
        "Books Home":HomeScreen,
        "Book Details":BookDetailsScreen,
        "Book Add":BookAddScreen,
        "Book List":BookListScreen
        
    },
    //configuration for stack navigator
    {

    }
);


export default createAppContainer(navigator);