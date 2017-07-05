import React from 'react';
import ReactDOM, {render} from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { Router, Route, Link, browserHistory,IndexRoute} from 'react-router';
import {configureStore} from './store/configureStore';
import LayoutContainer from './containers/LayoutContainer';
const store=configureStore();
render(

	<Provider store={store}>
	<Router history = {browserHistory}>
		<Route path="/" component={LayoutContainer} />
	</Router>
	</Provider>,
	document.getElementById('container')
	);