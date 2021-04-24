import React, { Fragment, useEffect } from "react";
import { fetchFormFields } from "../modules/register";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../../components/Input/Input";
import Checkbox from "../../../components/Checkbox/Checkbox";
import Select from "../../../components/Select/Select";
import Terms from "../../../components/Terms/Terms";

export function FormView(props) {
  let { formFields } = useSelector((state) => state.register);

  const dispatch = useDispatch();
  const {role} = props.match.params;

  useEffect(async () => {
    await dispatch(fetchFormFields(role));
  }, []);

  console.log(props);

  return (
    <Fragment>
      <div>
        <div className="card-title">
          <h1>
            <Link to="/register">
              <i className="fas fa-chevron-left" />
            </Link>{" "}
            Italian F&amp;B Producers
          </h1>
          <hr />
        </div>
        <div className="card-form">
          <form>
            <div className="small-text">* Required Information</div>
            {Object.keys(formFields).map((item) => {
              return (
                <Fragment>
                  {formFields[item].map((field) => {
                    if (
                      field.type == "email" ||
                      field.type == "password" ||
                      field.type == "text"
                    ) {
                      return (
                        <Fragment>
                          <Input
                            key={field.user_field_id}
                            type={field.type}
                            placeholder={field.placeholder}
                            name={field.name}
                            label={field.title}
                            id={field.user_field_id}
                          />
                          {field.type == "password" ? (
                            <Fragment>
                              <div className="pwd-hints">
                                <div className="hint-list">
                                  <span>
                                    <i className="far fa-check-circle" />
                                  </span>
                                  Minimun 8
                                </div>
                                <div className="hint-list">
                                  <span>
                                    <i className="far fa-check-circle" />
                                  </span>
                                  1 digit
                                </div>
                                <div className="hint-list">
                                  <span>
                                    <i className="far fa-check-circle" />
                                  </span>
                                  1 special{" "}
                                  <a
                                    href="#"
                                    title="Valid Special Characters: [!@#$%^&*+-=[/]()`~|\<>?]"
                                  >
                                    <i className="far fa-question-circle" />
                                  </a>
                                </div>
                              </div>
                              <div className="form-desc">
                                Password must be at least 8 characters and
                                contain at least one numeric digit and a special
                                character.
                              </div>
                            </Fragment>
                          ) : null}
                        </Fragment>
                      );
                    } else if (field.type == "checkbox") {
                      return (
                        <Fragment>
                          <Checkbox
                            key={field.user_field_id}
                            label={field.title}
                            type={field.type}
                            placeholder={field.placeholder}
                            Options={field.options}
                            id={field.user_field_id}
                          />
                        </Fragment>
                      );
                    } else if (field.type == "select") {
                      return (
                        <Fragment>
                          <Select
                            key={field.user_field_id}
                            label={field.title}
                            type={field.type}
                            placeholder={field.placeholder}
                            Options={field.options}
                            id={field.user_field_id}
                          />
                        </Fragment>
                      );
                    } else if (field.type == "radio") {
                      return (
                        <Fragment>
                          <Select
                            key={field.user_field_id}
                            label={field.title}
                            type={field.type}
                            placeholder={field.placeholder}
                            Options={field.options}
                            id={field.user_field_id}
                          />
                        </Fragment>
                      );
                    } else if (field.type == "terms") {
                      return (
                        <Fragment>
                          <Terms
                            key={field.user_field_id}
                            label={field.title}
                            type={field.type}
                            id={field.user_field_id}
                          />
                        </Fragment>
                      );
                    }
                  })}
                </Fragment>
              );
            })}

            <hr />
            {/*  */}
            <div className="form__action form__item">
              <button type="submit">Sign up</button>
              <hr />
              <a className="btn bg-color-blue mt-4" href="italian-login.html">
                Already have an account with us?
              </a>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
