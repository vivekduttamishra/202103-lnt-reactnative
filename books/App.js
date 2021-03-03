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