import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import loginReducer from "../routes/login/modules/login";
import RegisterReducer from "../routes/register/modules/register"
import authWrapperReducer from "../routes/AuthWrapper/modules/auth"

const rootReducer =(history)=> combineReducers({
  router: connectRouter(history),
  auth: loginReducer,
  register: RegisterReducer,
  authWrapper: authWrapperReducer

});

export default rootReducer;