import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

let viewStyle={
    marginTop:100,
    marginLeft:100,
    backgroundColor: '#FC0'
};
let titleStyle={
    fontSize:40
}

//what UI should my application display
//whatever default export App.js provides is used as 
//main application for my React Native
export default function () {

    let title='Book App';

    let subTitle='Book List';

    return (
                <View style={viewStyle} >
                    <Text style={titleStyle}>{title}</Text>

                    <Text style={{color:'red'}}>{subTitle}</Text>
                </View>
   );
}