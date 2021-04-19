import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, setLoginData } from "../modules/login";

export function LoginView(props) {
  console.log(__IMG_URL__);
  let loginData = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handlechange = async (event) => {
    const name = event.target.name;
    const value = event.target.value;
    loginData[name] = value;
    await dispatch(setLoginData(loginData));
  };


  async function submitHandler(e) {
    await e.preventDefault();
    await dispatch(logIn({ ...loginData, history: props.history }));
  }

  return (
    <Fragment>
    <div>
    <div className="site__header">
      <div className="site__width">
        <div className="site-align">
          <div className="site__logo">
            <img src="public/images/logo.png"/>
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
    {/* Layout Content */}
    <div className="main__content" style={{minHeight: '53.75rem'}}>
      <div className="site__width">
        <div className="register_form">
          <div className="card--block">
            <div className="card-title main-forms-list">
              <h1>Join Alysei Today</h1>
              <h2>Become an Alysei Member by signing up for the Free Trial Beta version. Your access request will be subject to approval.</h2>
            </div>
            <div className="card-list">
              <ul>
                <li>
                  <a href="italian-register.html">Italian F&amp;B Producers <i className="fas fa-angle-double-right" /></a>
                </li>
                <li>
                  <a href="us-imp-register.html">US Importers &amp; Distributors <i className="fas fa-angle-double-right" /></a>
                </li>
                <li>
                  <a href="italian-resturant-register.html">Italian Restaurants in US <i className="fas fa-angle-double-right" /></a>
                </li>
                <li>
                  <a href="voice-of-experts-register.html">Voice of Experts <i className="fas fa-angle-double-right" /></a>
                </li>
                <li>
                  <a href="travel-register.html">Travel Agencies <i className="fas fa-angle-double-right" /></a>
                </li>
                <li>
                  <a href="voyager-register.html">Voyager <i className="fas fa-angle-double-right" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="site__footer">
        <div className="site__width">
          <div className="site-align">
            <div className="footer-nav">
              <ul>
                <li><a href="javascript:void(0)">Home</a></li>
                <li><a href="javascript:void(0)">Contact us</a></li>
                <li><a href="javascript:void(0)">Privacy Policy</a></li>
                <li><a href="javascript:void(0)">Terms</a></li>
              </ul>
            </div>
            <div className="footer-social--nav">
              <ul>
                <li>
                  <a href="javascript:void(0)"><i className="fab fa-facebook-square" /> Facebook</a>
                </li>
                <li>
                  <a href="javascript:void(0)"><i className="fab fa-instagram" /> Instagram</a>
                </li>
                <li>
                  <a href="javascript:void(0)"><i className="fab fa-youtube-square" /> Youtube</a>
                </li>
                <li>
                  <a href="javascript:void(0)"><i className="fab fa-linkedin" /> Linkedin</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    </Fragment>
  );
}

export default LoginView;
