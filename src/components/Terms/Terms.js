import React, { Fragment } from "react";
import ReactHtmlParser from 'react-html-parser';

export function Terms({label,id}) {
    return (
    <Fragment>
      <div className="form__item form__checkbox">
        <input type="checkbox" id={id} />
        <label htmlFor={id}>
          {ReactHtmlParser(label)}
        </label>
      </div>
    </Fragment>
  );
}

export default Terms