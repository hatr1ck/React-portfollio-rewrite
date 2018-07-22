import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';



function firstReducer(state=['the less I know the worse'], action){
    if (action.type === 'ADD_FROM_COMPONENT'){
        return ([...state, action.payload]);
    }
    return state;
}
function secondReducer(state=['the less I know the better'], action){
    if (action.type === 'ADD_FROM_COMPONENT'){
        return ([...state, action.payload]);
    }
    return state;
}

const allReducers = combineReducers({
    firstReducer,
    secondReducer
});

// let dispatchName = {
//     type: 'UPDATE',
//     payload: "FROM MY OWN"
// }
// let dispatchinitialState = {
//     type: 'UPDATE2',
//     payload: "I CANT WAKE UP"
// }

const store = createStore(allReducers, window.devToolsExtension && window.devToolsExtension());


// store.dispatch(dispatchName);
// store.dispatch(dispatchinitialState);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
