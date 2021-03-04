import React,{useState} from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import If from '../components/if-component';
import BookListScreen from '../screens/book-list-screen';
import BookAddScreen from '../screens/book-add-screen';
import BookDetailsScreen from '../screens/book-details-screen';
import HomeScreen from '../screens/home-screen';
import AppHeader from '../components/app-header';

const Navigator= ({screens})=> {

    let [screen,changeScreen]=useState('home');
    //Todo Init 
    return (
        <View style={styles.container}> 
            
            <If condition={screen==='home'} ><HomeScreen navigate={changeScreen} /></If>
            <If condition={screen!=='home'} ><AppHeader heading='Books' navigate={changeScreen} /></If>
            <If condition={screen==='book-list'} ><BookListScreen navigate={changeScreen}/></If>
            <If condition={screen==='book-add'} ><BookAddScreen navigate={changeScreen}/></If>            
            <If condition={screen==='book-details'} ><BookDetailsScreen navigate={changeScreen}/></If>

        
        </View>
    );
};


const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'///
    }
});
export default Navigator;