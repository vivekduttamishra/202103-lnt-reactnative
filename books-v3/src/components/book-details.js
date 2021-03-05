import React from 'react';
import {StyleSheet,ScrollView,Text,Image,View,Modal,Button} from 'react-native';

import LabeledValue from './labeled-value';
import globalStyle from '../styles/global';
import Colors from '../styles/colors';
import toast from './toast';

import {connect} from 'react-redux';
import {deleteBook} from '../store/book-actions';


const BookDetails=({book,navigation, deleteBook})=>{
    
    const {title,author,price,cover,rating,votes}=book;
    
    let onButtonClick=()=>{
      console.log('deleting book ',book.isbn);
      //toast('Added to Favorite');
      deleteBook(book.isbn);
      navigation.pop();
    }

    return (
      <ScrollView style={styles.container}>
          <View style={styles.buttonStyle}>
            <Button color={Colors.primaryColor} 
                   title='delete' 
                   onPress={(onButtonClick)}
                   />
          </View>
          <Text style={styles.title}>{title}</Text>
         
         <LabeledValue label='Author' value={author} />
         <LabeledValue label='Price' value={`Rs ${price}`} />
         <LabeledValue label='rating' value={`${rating} out of 5 (${votes} votes)`} />
         
          <Image style={styles.coverImage} 
                 source={{uri:book.cover}}
                 resizeMode='cover'
          />

          
      </ScrollView>
    );
 };


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


 const mapReduxStateToProps= state => ({...state});
 const actions={
  deleteBook
 }
 export default connect(mapReduxStateToProps,actions)(BookDetails);
 