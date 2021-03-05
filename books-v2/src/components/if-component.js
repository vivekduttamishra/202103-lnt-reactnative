import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';


const If= ({condition,children})=> {
    //Todo Init

    if(!condition)
        return null;


    return (
        <>
        {children}
        </>
    );
};


const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'///
    }
});
export default If;