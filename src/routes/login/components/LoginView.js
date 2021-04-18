import React,{ Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {logIn,setLoginData} from "../modules/login"
import logo from "../../../../public/images/logo.png"

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
        <div className="site__header">
  <div className="site__width">
    <div className="site-align">
      <div className="site__logo">
        <img src="../../../../public/images/logo.png" alt />
      </div>
      <div className="login__form">
        <form className>
          <div className="form__item">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form__item">
            <input type="password" placeholder="Password" />
          </div>
          <div className="form__action form__item">
            <button type="submit">Login</button>
          </div>
          <span className="form__forgot-link">
            <a href="javascript:void(0)">Forgot password?</a>
          </span>
        </form>
      </div>
    </div>
  </div>
</div>

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