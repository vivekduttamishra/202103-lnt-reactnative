import React from 'react';

import {StyleSheet,ScrollView,TouchableOpacity,Text,Image,View,Modal,Button} from 'react-native';

import LabeledValue from '../components/labeled-value';
import globalStyle from '../styles/global';
import Colors from '../styles/colors';
import toast from '../components/toast';
import BookDetails from '../components/book-details';


const BookDetailsScreen=({navigation})=>{

    let book= navigation.getParam('book');
    return <BookDetails navigation={navigation} book={book} />
 };


 BookDetailsScreen.navigationOptions=({navigation})=>{

  return {
    headerTitle: navigation.getParam('book').title
  };

 }


 const styles=StyleSheet.create({
    ...globalStyle,  //take all values from global and merge it here
    //here you should styles for current screen
    screen:{

    },
    buttonStyle:{
      
      margin:5,
      alignSelf:'flex-end'
      
    },
    coverImage:{
      ...globalStyle.boxShadow,
      padding:5,
      borderWidth:5,
      borderColor:Colors.accentColor,
      height:600,
      width:'100%',
      alignSelf:'center'
    }
 })



 export default BookDetailsScreen;
 