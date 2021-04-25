import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, setLoginData } from "../modules/login";

export function LoginView(props) {
  console.log(__IMG_URL__);
  let loginData = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handlechange = async (event) => {
    const name = event.target.id;
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
      
    </Fragment>
  );
}

export default LoginView;
