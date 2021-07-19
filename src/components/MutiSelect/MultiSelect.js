import React, { Fragment } from "react";
import { Multiselect } from "multiselect-react-dropdown";

export function MultiSelecter({displayValue,id,Options,label}) {
  return (
    <Fragment>
      <div className="form__item">
        <label>{label}</label>
        <div className="select--field">
          <Multiselect
            options={Options}
            displayValue={displayValue}
            id={id}
           />
    {/* console.log(id); */}
        </div>
      </div>
    </Fragment>
  );
}

export default MultiSelecter