import React, { Fragment } from "react";
import  image from  "../../../public/images/logo.png"

export function AuthHeader() {
  return (
    <Fragment>
      <div className="site__header">
        <div className="site__width">
          <div className="site-align">
            <div className="site__logo">
              <img src={image} alt="" /> 
            </div>
            <div className="login__form">
              <form>
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
                  <a href="#">Forgot password?</a>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AuthHeader;
