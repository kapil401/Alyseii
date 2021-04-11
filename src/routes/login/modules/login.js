export const LOGIN_P_SET_LOGIN_SPINNER_STATUS =
  "LOGIN_P_SET_LOGIN_SPINNER_STATUS";
export const LOGIN_P_SET_LOGIN_FORM_DATA = "LOGIN_P_SET_LOGIN_FORM_DATA";

export function setloginSpinner(flag) {
  return {
    type: LOGIN_P_SET_LOGIN_SPINNER_STATUS,
    payload: flag,
  };
}

export function setLoginData(data) {
  return {
    type: LOGIN_P_SET_LOGIN_FORM_DATA,
    payload: data,
  };
}

export function logIn(data) {
  return async (dispatch, getState) => {
    await dispatch(setloginSpinner(true));
    const token = `Basic ${btoa(`${data.username}:${data.password}`)}`;
    try {
      const result = await fetch(`https://api.yoursafespaceonline.com/api/login`, {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
          Authorization: token,
        },
      });
      let response = await result.json();
      if (response.success) {
        await dispatch(setloginSpinner(true));
        console.log(response);
      }
    } catch (e) {
      await dispatch(setloginSpinner(false));
      console.log(e);
    }
  };
}

export const initialState = {
  loginSpinner: false,
  loginData:{
    email:"",
    password:""
  }
};

export const loginActions = {
  setloginSpinner,
  setLoginData
};

const ACTION_HANDLERS = {
  [LOGIN_P_SET_LOGIN_FORM_DATA]:(state, action)=>{
    return {
      ...state,
      loginData: action.payload,
    }
  },
  [LOGIN_P_SET_LOGIN_SPINNER_STATUS]: (state, action) => {
    return {
      ...state,
      loginSpinner: action.payload,
    };
  },
};

export default function loginReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
