import { combineReducers } from 'redux';
import todoSlice from 'Redux/reducers/todoSlice';

const rootReducer = combineReducers ({
    todos: todoSlice
})

export default rootReducer;