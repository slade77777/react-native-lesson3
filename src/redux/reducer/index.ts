import {combineReducers} from 'redux';

import answerReducer from "./answerReducer";
import productReducer from "./productReducer";

export default combineReducers({answerReducer, productReducer});
