
import React,{useState} from 'react';

import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';



import BookListScreen from '../screens/book-list-screen';
import BookAddScreen from '../screens/book-add-screen';
import BookDetailsScreen from '../screens/book-details-screen';
import HomeScreen from '../screens/home-screen';




let bookFlowNavigator= createStackNavigator(
    //list of of my screens
    {
        "Book List":BookListScreen,
        "Book Details":BookDetailsScreen,
        "Book Add":BookAddScreen
        
        
    },
    //configuration for stack navigator
    {

    }
);


let navigator= createSwitchNavigator(
    {
        "Home":HomeScreen,
        "Books": bookFlowNavigator
    }
)



export default createAppContainer(navigator);