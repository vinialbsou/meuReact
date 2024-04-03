import {combineReducers} from "redux";
import userReducer from "./users";

/**
 * All reducers should be combined in this function
 * All the names set here are exact the same names that you need to add when calling a specific reducer
 */
export default combineReducers({
  user: userReducer,
});
