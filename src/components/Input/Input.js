import React, { Fragment } from "react";

export function Input({ type, label, placeholder, id, name, itemkey }) {
  return (
    <Fragment>
      <div className="form__item" key={itemkey}>
        <label htmlFor={id}>{label}</label>
        <input type={type} placeholder={placeholder} id={id} name={name} />
      </div>
    </Fragment>
  );
}

export default Input