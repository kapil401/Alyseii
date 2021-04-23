import React, { Fragment, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFormFields} from "../modules/login";

export function LoginView(props) {
  let loginData = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  


  useEffect(()=>{
    dispatch(fetchFormFields(3))
  },[])

  async function submitHandler(e) {
    await e.preventDefault();
    await dispatch(logIn({ ...loginData, history: props.history }));
  }

  return (
    <Fragment>
<h1>Hi there</h1>      
    </Fragment>
  );
}

export default LoginView;
