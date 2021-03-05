import React from 'react';  //react is a core library for developing UI application
import App from './src/navigator/navigator';

import {Provider} from 'react-redux'; //connect react-and-redux
import store from './src/store';

//console.log('store',store);

export default ()=>( 
    
        <Provider store={store}>
            <App/>
        </Provider>

);





