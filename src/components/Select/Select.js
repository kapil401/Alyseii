import React, { Fragment } from "react";

export function Select({ label, placeholder, Options, id , itemkey}) {
  
  return (
    <Fragment>
      <div className="form__item" key={itemkey}>
        <label>{label}</label>
        <div className="select--field">
          <select id={id}>
            <option>Select</option>
            {Options.map((item) => {
              return (
                <Fragment>
                  <option value="user_field_id" key={item.option}>{item.option}</option>
                </Fragment>
              );
            })}
          </select>
          <div className="select--field-arrow">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        {/* <div className="form-desc">Hotel/Restaurant/Café</div> */}
      </div>
      <hr />
    </Fragment>
  );
}

export default Select;
