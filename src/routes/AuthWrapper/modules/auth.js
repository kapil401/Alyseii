export const AUTH_VIEW_FETCH_ALL_USER_ROLES = "AUTH_VIEW_FETCH_ALL_USER_ROLES";
export const AUTH_VIEW_SET_FETCH_USER_ROLES_SPINNER =
  "AUTH_VIEW_SET_FETCH_USER_ROLES_SPINNER";

export function setUserRoles(data) {
  return {
    type: AUTH_VIEW_FETCH_ALL_USER_ROLES,
    payload: data,
  };
}

export function setRoleSpinner(value) {
  return {
    type: AUTH_VIEW_SET_FETCH_USER_ROLES_SPINNER,
    payload: value,
  };
}

export function fetchUserRoles() {
  console.log();
  return async (dispatch, getState) => {
    await dispatch(setRoleSpinner(true));
    try {
      const result = await fetch(`${__API__}/get/roles`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      });
      let response = await result.json();
      if (response.success) {
        await dispatch(setRoleSpinner(false));
        await dispatch(setUserRoles(response.data));
      }
    } catch (e) {
      await dispatch(setRoleSpinner(false));
      console.log(e);
    }
  };
}

export const initialState = {
  role_data: {},
  userRoleSpinner: false,
};

const ACTION_HANDLERS = {
  [AUTH_VIEW_FETCH_ALL_USER_ROLES]: (state, action) => {
    return {
      ...state,
      role_data: action.payload,
    };
  },
  [AUTH_VIEW_SET_FETCH_USER_ROLES_SPINNER]: (state, action) => {
    return {
      ...state,
      userRoleSpinner: action.payload,
    };
  },
};

export default function authWrapperReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
