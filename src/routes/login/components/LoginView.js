import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, setLoginData } from "../modules/login";
import Input from "../../../components/Input/Input";
import { Link } from "react-router-dom";

export function LoginView(props) {
  const dispatch = useDispatch();

  const loginData = useSelector((state) => state.auth);
  const {role_data:
    {roles}
  } = useSelector((state) => state.authWrapper);
  const { role } = props.match.params;

  const handlechange = async (event) => {
    const name = event.target.id;
    const value = event.target.value;
    loginData[name] = value;
    await dispatch(setLoginData(loginData));
  };

  const submitHandler = async (e) => {
    await e.preventDefault();
    await dispatch(logIn({ ...loginData, history: props.history }));
  };

  return (
    <Fragment>
      <div>
        <div className="card-title">
          <h1>
          <Link to={`/register/${role}`}>
              <i className="fas fa-chevron-left" />
            </Link>{" "}
            {roles && roles.find((i) => i.role_id == role).name}
          </h1>
          <hr />
        </div>
        <div className="card-form">
          <form className>
            <Input 
            name="email"
            placeholder="Email"
            type="email"
            />
            <Input 
            name="password"
            placeholder="password"
            type="password"
            />
            <Link className="text-xs inline-block mt-6" to="/forgot-password">
              Lost password?
            </Link>
            <div className="form__action form__item left-button">
              <button type="submit">Login</button>
              <hr />
              <div className="text-center">
                <Link
                  className="btn bg-color-blue mt-4"
                  to={`/register/${role}`}
                >
                  Don't have an account with us?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default LoginView;
