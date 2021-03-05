import React from 'react';

import { StyleSheet, ScrollView,FlatList, TouchableOpacity, Text, Image, View, Modal, Button } from 'react-native';

import LabeledValue from '../components/labeled-value';
import globalStyle from '../styles/global';
import Colors from '../styles/colors';
import toast from '../components/toast';
import BookDetails from '../components/book-details';
import StartRating from '../components/start-rating';

const BookInfoHeader=({book})=>{
  
  const { title, author,price, rating, cover } = book;
  return (
    <View style={styles.row}>
        <Image style={styles.coverImageSmall}
          source={{ uri: cover }}
          resizeMode='cover'
        />
        <View style={styles.simpleView}>
          <Text style={styles.titleSm}>{title}</Text>
          <Text style={styles.author}>by {author}</Text>
          <View style={{ alignItems: 'center' }}>
            <StartRating rating={rating} />
          </View>
          <Text style={styles.author}>₹{price}</Text>
        </View>
        
      </View>
  )
}

const BookQuickInfoScreen = ({ book }) => {
  const { title, author, price, votes, rating, cover } = book;
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.coverImage}
        source={{ uri: cover }}
        resizeMode='cover'
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>by {author}</Text>

      <View style={{ alignItems: 'center' }}>
        <StartRating rating={rating} />
      </View>
      <Text style={styles.author}>₹{price}</Text>
    </ScrollView>

  );
};

const BookDescriptionScreen = ({ book }) => {
  const { description } = book;
  return (
    <View style={styles.container}>
      <BookInfoHeader book={book} />
      <ScrollView style={styles.description}>
          <Text style={styles.descriptionText}>{description}</Text>
      </ScrollView>

    </View>

  );
}

const BookReviewScreen = ({ book }) => {
  let {reviews}=book;
  return (
    <View styles={styles.container}>
      <BookInfoHeader book={book} />
      <Text style={styles.title}>Book Reviews ({reviews?reviews.length:0})</Text>
      {(!reviews || !reviews.length) 
          ? <Text style={{textAlign:'center'}}>No Reviews Yet. Add One</Text>
          :(
           <FlatList data={reviews}
              renderItem={ ({item})=>(
                <View style={styles.reviewListItem}>
                    <Text style={styles.reviewListText} >{item}</Text>
                </View>
              )}
           />
          )
      }
    </View>
  );
}

// <ScrollView>
//              {reviews.map((review,i)=>(
//                <Text style={styles.listText}>{review}</Text>
//              ))}
//            </ScrollView>

const BookDetailsScreen = ({ navigation }) => {

  let book = navigation.getParam('book');
  console.log('book', book);

  return <BookQuickInfoScreen
   book={book} />
};


BookDetailsScreen.navigationOptions = ({ navigation }) => {

  return {
    headerTitle: navigation.getParam('book').title
  };

}


const styles = StyleSheet.create({
  ...globalStyle,  //take all values from global and merge it here
  //here you should styles for current screen
  screen: {

  },
  descriptionText:{
    padding:10,
    textAlign: 'left',
    fontSize:22
  },
  buttonStyle: {

    margin: 5,
    alignSelf: 'flex-end'

  },
  simpleView:{
    flex:1,
    paddingHorizontal: 10,
    
    alignItems: 'flex-start'
  },
  titleSm: {
    ...globalStyle.title,
    fontSize: 25,
    textAlign: 'center'
  },
  author: {
    textAlign: 'center',
    fontSize: 25
  },
  coverImage: {
    ...globalStyle.boxShadow,
    paddingVertical: 5,
    borderWidth: 5,
    borderColor: Colors.accentColor,
    height: 500,
    width: '90%',
    borderRadius: 25,
    alignSelf: 'center'
  },
  reviewListItem:{
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth:1,
    borderBottomColor: Colors.accentColor
  },
  reviewListText:{
    fontSize: 18,
   
  },
  coverImageSmall: {
    ...globalStyle.boxShadow,
    paddingVertical: 5,
    borderWidth: 5,
    borderColor: Colors.accentColor,
    height: 200,
    width: 120,
    borderRadius: 25,
    alignSelf: 'center'
  }

})



export default BookDetailsScreen;
