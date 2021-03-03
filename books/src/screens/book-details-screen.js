import React from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';

import LabeledValue from '../components/labeled-value';
import globalStyle from '../styles/global';
import Colors from '../styles/colors';
import toast from '../components/toast';


const BookDetailsScreen=({title,author,price,rating,votes})=>{

    
    let onButtonClick=()=>{
      console.log('Added To Favorite');
      toast('Added to Favorite');
    }

    return (
      <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
         
         <LabeledValue label='Author' value={author} />
         <LabeledValue label='Price' value={`Rs ${price}`} />
         <LabeledValue label='rating' value={`${rating} out of 5 (${votes} votes)`} />
          
          <View style={styles.buttonStyle}>
            <Button color={Colors.primaryColor} 
                   title='Add to Favorite' 
                   onPress={onButtonClick}
                   />
          </View>
      </View>
    );
 };


 const styles=StyleSheet.create({
    ...globalStyle,  //take all values from global and merge it here
    //here you should styles for current screen
    screen:{

    },
    buttonStyle:{
      
      margin:50
      
    }
 })

 export default BookDetailsScreen;
 