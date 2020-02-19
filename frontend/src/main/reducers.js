// DOCUMENT ONLY REQUIRED TO USE REDUX
import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer';

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer;

// DOCUMENT ONLY REQUIRED TO USE REDUX