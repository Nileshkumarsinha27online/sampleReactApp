import { combineReducers } from 'redux';
import SampleReducer from './SampleReducer/SampleReducer.js';
import Listreducer from './Listreducer/Listreducer.js';
const rootReducer = combineReducers({
	SampleReducer,
	Listreducer
});

export default rootReducer;
