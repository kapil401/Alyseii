export const REGISTER_SET_SIGNUP_FORM_FIELDS="REGISTER_SET_SIGNUP_FORM_FIELDS";
export const REGISTER_SET_SIGNUP_FORM_FIELDS_SPINNER_STATUS="REGISTER_SET_SIGNUP_FORM_FIELDS_SPINNER_STATUS";

export function setFormFields(data) {
    return {
      type: REGISTER_SET_SIGNUP_FORM_FIELDS,
      payload: data,
    };
  }

export function setFormFieldSpinner(flag){
    return {
        type: REGISTER_SET_SIGNUP_FORM_FIELDS_SPINNER_STATUS,
        payload: flag,
      };
}
  

  export function fetchFormFields(data) {
    return async (dispatch, getState) => {
      await dispatch(setFormFieldSpinner(true));
      try {
        const result = await fetch(`http://alysei.ibyteinfomatics.com/public/api/get/registration/fields/3`, {
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

export const actions={
    fetchFormFields,
    setFormFieldSpinner,
    setFormFields
}  

export const initialState={
    formFields:{},
    formSpinner:false
}

const ACTION_HANDLERS={
    [REGISTER_SET_SIGNUP_FORM_FIELDS]:(state, action)=>{
        return{
            ...state,
            formFields:action.payload
        }
    },
    [REGISTER_SET_SIGNUP_FORM_FIELDS_SPINNER_STATUS]:(state,action)=>{
        return{
            ...state,
            formSpinner:action.payload
        }
    }
}

export default function loginReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}