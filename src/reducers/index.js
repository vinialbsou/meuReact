import {combineReducers} from "redux";
import userReducer from "./users";
import tokenReducer from "./userToken";

const rootReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
});

export default rootReducer;
