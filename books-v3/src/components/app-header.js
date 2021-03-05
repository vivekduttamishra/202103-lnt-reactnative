import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

import globalStyle from '../styles/global';
import Colors from '../styles/colors';

const IconButton=(props)=>{

    return (
        <TouchableOpacity onPress={props.onPress}>
            <MaterialIcons style={styles.iconStyle} name={props.icon}  />
        </TouchableOpacity>
    );
}

function AppHeader(props){
    console.log('props.heading',props.heading);
    
    return (
      <View style={styles.headerContainer}>
        <View>
           <Text style={styles.heading} >{props.heading}</Text>
        </View>
        <View style={styles.row}>
           <IconButton icon='featured-play-list' onPress={()=>props.navigate('book-list')} />
           <IconButton icon='my-library-add' onPress={()=>props.navigate('book-add')} />
           <IconButton icon='home' onPress={()=>props.navigate('home')}/>
        </View>  
      </View>
    );
}


const styles=StyleSheet.create({
    ...globalStyle,  //take all values from global and merge it here
    headerContainer: {
        flexDirection:'row',
        paddingHorizontal: 20,
        paddingTop: 150,
        width:"100%",
        height:220,
        backgroundColor: Colors.primaryColor,
        alignItems:'center',
        justifyContent: 'space-between',
        paddingLeft: 5,
        ...globalStyle.boxShadow,
        marginBottom:5
    },
   iconStyle:{
    ...globalStyle.boxShadow,
    fontSize:45,
    paddingLeft:10,
    color:'white'
   },

    heading: {
        color: Colors.titleColor,
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft:20
        



    },

    dateStyle: {
        textAlign: 'right',
        fontSize: 12,
        fontWeight: 'bold',
        //fontFamily: 'courier',
        color: Colors.accentColor
    }
})


export default AppHeader;