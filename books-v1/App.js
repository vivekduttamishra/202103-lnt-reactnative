import React from 'react';  //react is a core library for developing UI application


import { View, StyleSheet } from 'react-native';  //is a react based library for developing mobile UI
import AppHeader from './src/components/app-header';
import Navigator from './src/navigator/navigator';
import globalStyle from './src/styles/global';

const App = () => (

    <View style={styles.container}>
       
        <Navigator />
    </View>

);

const styles=StyleSheet.create({
    ...globalStyle,
    //style specific to this container
    app:{

    }
})



export default App;






