import React, { Fragment, useEffect } from "react";
import { fetchFormFields } from "../modules/register";
import { Link } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";

export function RegisterView(params) {
  let {
    role_data ,
  } = useSelector((state) => state.authWrapper);
  return (
    <Fragment>
      <div className="card-title main-forms-list">
        <h1>{role_data.subtitle}</h1>
        <h2>
         {role_data.description}
        </h2>
      </div>
      <div className="card-list">
        <ul>
          {role_data.roles &&
            role_data.roles.map((item) => (
              <li key={item.role_id}>
                <Link
                  to={`/register/${item.role_id}`}
                  // onClick={() => dispatch(fetchFormFields(item.role_id))}
                >
                  {item.name}
                  <i className="fas fa-angle-double-right" />
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default RegisterView
