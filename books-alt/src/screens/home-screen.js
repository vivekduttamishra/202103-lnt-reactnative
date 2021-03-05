import React from 'react';
import {View,Text,Image,ImageBackground, TouchableOpacity, Button,StyleSheet} from 'react-native';
import globalStyle from '../styles/global';
import Colors from '../styles/colors';

const HomeScreen= (props)=> {

    
    //Todo Init
    return (
        <ImageBackground 
        style={styles.coverImage}
        resizeMode="stretch" 
         source={require('../../assets/books.jpg')}
>
        <View style={styles.container}>
           
                <View style={styles.overlayText}>
                <Text style={styles.title}>Book's World</Text>
                </View>
                <View style={styles.overlayText}>
                    <TouchableOpacity 
                            style={styles.enterButton}
                            onPress={()=>props.navigation.navigate('Books')}
                            >
                        <Text style={styles.enterButtonText}>Enter</Text>
                    </TouchableOpacity>
                </View>
           
        </View>
        </ImageBackground>
    );
};


const styles= StyleSheet.create({
    ...globalStyle,
    container:{
       alignItems:'stretch',
       flex:1,
       borderWidth:1,
       justifyContent: 'center',
    },
    overlayText: {
        backgroundColor:'black',
        opacity:.5
    },
    enterButtonText:{
        fontSize:40,
        color:'white',
        textAlign: 'center'
    },
    title:{
        color:Colors.primaryColor,
        fontSize:90,
        textAlign: 'center',
        fontWeight: 'bold'

        
    },
    homeImage:{
        ...globalStyle.boxShadow,
        width:300,
        height:400,
       
        borderRadius:20
        
    },
    coverImage:{
        flex:1,
        width:"100%"
    }
});
export default HomeScreen;