import counterReducer from "./counter/reducers";
import { combineReducers } from "redux";

export default combineReducers({
    counter: counterReducer,
});