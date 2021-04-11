import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import loginReducer from "../routes/login/modules/login";

const rootReducer =(history)=> combineReducers({
  router: connectRouter(history),
  auth: loginReducer,
});

export default rootReducer;
