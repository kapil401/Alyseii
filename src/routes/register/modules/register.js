export const REGISTER_SET_SIGNUP_FORM_FIELDS =
  "REGISTER_SET_SIGNUP_FORM_FIELDS";
export const REGISTER_SET_SIGNUP_FORM_FIELDS_SPINNER_STATUS =
  "REGISTER_SET_SIGNUP_FORM_FIELDS_SPINNER_STATUS";
export const SET_REGISTER_FORM_FIELD_VALUES="SET_REGISTER_FORM_FIELD_VALUES"


export function setFormFields(data) {
  return {
    type: REGISTER_SET_SIGNUP_FORM_FIELDS,
    payload: data,
  };
}

export function setFormFieldSpinner(flag) {
  return {
    type: REGISTER_SET_SIGNUP_FORM_FIELDS_SPINNER_STATUS,
    payload: flag,
  };
}

export function setFieldValues(data) {
  return {
    type: SET_REGISTER_FORM_FIELD_VALUES,
    payload: data,
  };
}

export function fetchFormFields(id) {
  console.log();
  return async (dispatch, getState) => {
    await dispatch(setFormFieldSpinner(true));
    try {
      const result = await fetch(`${__API__}/get/registration/fields/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      });
      let response = await result.json();
      if (response.success) {
        await dispatch(setFormFieldSpinner(false));
        await dispatch(setFormFields(response.data));
      }
    } catch (e) {
      await dispatch(setFormFieldSpinner(false));
      console.log(e);
    }
  };
}

export const actions = {
  fetchFormFields,
  setFormFieldSpinner,
  setFormFields,
};

export const initialState = {
  formFields: {},
  formSpinner: false,
  formValue:{}
};

const ACTION_HANDLERS = {
  [REGISTER_SET_SIGNUP_FORM_FIELDS]: (state, action) => {
    return {
      ...state,
      formFields: action.payload,
    };
  },
  [REGISTER_SET_SIGNUP_FORM_FIELDS_SPINNER_STATUS]: (state, action) => {
    return {
      ...state,
      formSpinner: action.payload,
    };
  },
  [SET_REGISTER_FORM_FIELD_VALUES]:(state, action)=>{
    return {
      ...state,
      formValue: action.payload,
    };
  }
};

export default function RegisterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
