import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StartRating= ({rating})=> {
    
    const starSize=32;
    
    let s=StyleSheet.create({
        outer:{
            borderColor:'red',
            //borderWidth:1,
            flexDirection: 'row',
            overflow: 'hidden',
            width:Math.floor((starSize+4)*rating)
           
        },
        inner:{
            borderColor:'green',
            //borderWidth:1,
            width: starSize*5,
            flexDirection: 'row'
        },
        star:{
            color:'gold',
            marginHorizontal:2,
            fontSize:starSize
        }
    });
    //Todo Init
    return (
        <View style={s.outer}>
            <View style={s.inner}>
                <Ionicons name="md-star" style={s.star} />
                <Ionicons name="md-star" style={s.star} />
                <Ionicons name="md-star" style={s.star} />
                <Ionicons name="md-star" style={s.star} />
                <Ionicons name="md-star" style={s.star} />
                
            </View>
            
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
export default StartRating;