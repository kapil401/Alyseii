import React,{ Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {logIn,setLoginData} from "../modules/login"

export function LoginView(props) {
    let loginData=useSelector(state=>state.auth);
    const dispatch = useDispatch();
    
    const handlechange=async (event)=> {
        const name = event.target.name;
        const value = event.target.value;
        
        loginData[name] = value;
        await dispatch(setLoginData(loginData))
        
      }

    async function submitHandler(e) {
        await e.preventDefault();
        await dispatch(logIn({ ...loginData, history: props.history }));
    }  

    return (
        <Fragment>
        <form className="login_form" onSubmit={(e)=>submitHandler(e)}>
                <div className="form-item">
                  <label>Email Address</label>
                  <input
                    type="text"
                    name="username"
                    onChange={(e)=>handlechange(e)}
                    value={loginData.username}
                  />
                </div>
                <div className="form-item">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={(e)=>handlechange(e)}
                    value={loginData.password}
                  />
                  
                </div>
                <div className="form-actions">
                  <button type="submit">
                    Submit
                  </button>
                </div>
              </form>
        </Fragment>
    )
}

export default LoginView