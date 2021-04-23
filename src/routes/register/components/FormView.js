import React, { Fragment } from "react";
import { fetchFormFields } from "../modules/register";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function FormView(params) {
  let { formFields } = useSelector((state) => state.register);
  console.log(formFields);
  return (
    <Fragment>
      <div>
        <div className="card-title">
          <h1>
            <a href="index.html">
              <i className="fas fa-chevron-left" />
            </a>{" "}
            Italian F&amp;B Producers
          </h1>
          <hr />
        </div>
        <div className="card-form">
          <form className>
            <div className="small-text">* Required Information</div>
            <div className="form__item">
              <label htmlFor="pwd">Password*</label>
              <input type="password" placeholder id="pwd" />
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
                    href="javascript:void(0)"
                    title="Valid Special Characters: [!@#$%^&*+-=[/]()`~|\<>?]"
                  >
                    <i className="far fa-question-circle" />
                  </a>
                </div>
              </div>
              <div className="form-desc">
                Password must be at least 8 characters and contain at least one
                numeric digit and a special character.
              </div>
            </div>
            <hr />
            <div className="form__item">
              <label>Product Type*</label>
              <div className="form-checkbox-container">
                <div className="form-checkbox-container-items">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="bf"
                    />
                    <label className="form-check-label" htmlFor="bf">
                      Baby Food
                    </label>
                  </div>
                  <div className="form-checkbox-blocks">
                    <div className="form-checkbox-item">
                      <div className="form-checkbox-title">
                        Conservation Methods
                      </div>
                      <div className="form-checkbox-contents">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="cg"
                          />
                          <label className="form-check-label" htmlFor="cg">
                            Canned goods
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="frz"
                          />
                          <label className="form-check-label" htmlFor="frz">
                            Frozen
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="prb"
                          />
                          <label className="form-check-label" htmlFor="prb">
                            Perishable
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="sstab"
                          />
                          <label className="form-check-label" htmlFor="sstab">
                            Shelf Stable
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-checkbox-item">
                      <div className="form-checkbox-title">
                        Conservation Methods
                      </div>
                      <div className="form-checkbox-contents">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="cg"
                          />
                          <label className="form-check-label" htmlFor="cg">
                            Canned goods
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="frz"
                          />
                          <label className="form-check-label" htmlFor="frz">
                            Frozen
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="prb"
                          />
                          <label className="form-check-label" htmlFor="prb">
                            Perishable
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="sstab"
                          />
                          <label className="form-check-label" htmlFor="sstab">
                            Shelf Stable
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
            
            
            <hr />
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
