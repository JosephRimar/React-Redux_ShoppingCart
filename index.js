import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers';
import * as action from './actions';


// const middleware = process.env.NODE_ENV === 'production' ?
//   [ thunk ] :
//   [ thunk, logger() ]

//Start application Logic Here
import App from './containers/App';


const store = createStore(rootReducer);
store.dispatch(action.hydrate(require('./api/products.json')));

render(
	<Provider store={store}>
		<App/>
	</Provider>
		, document.getElementById('root'));

// store.dispatch(action.addToCart(2));
// store.dispatch(action.removeFromCart(2));
// store.dispatch(action.getCurrentInventory());
