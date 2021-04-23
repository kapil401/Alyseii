import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import loginReducer from "../routes/login/modules/login";
import RegisterReducer from "../routes/register/modules/register"

const rootReducer =(history)=> combineReducers({
  router: connectRouter(history),
  auth: loginReducer,
  register: RegisterReducer
});

export default rootReducer;