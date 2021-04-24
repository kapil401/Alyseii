import React, { Fragment, useEffect } from "react";
import { fetchFormFields } from "../modules/register";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import actions from "../modules/register";
import { bindActionCreators } from "redux";

export function RegisterView(params) {

  return (
    <Fragment>
      <div className="card-title main-forms-list">
        <h1>Join Alysei Today</h1>
        <h2>
          Become an Alysei Member by signing up for the Free Trial Beta version.
          Your access request will be subject to approval.
        </h2>
      </div>
      <div className="card-list">
        <ul>
          <li>
            <Link
              to="/register/producer"
              //onClick={() => dispatch(fetchFormFields(3))}
            >
              Italian F&amp;B Producers{" "}
              <i className="fas fa-angle-double-right" />
            </Link>
          </li>
          <li>
            <Link to="/register/importer">
              US Importers &amp; Distributors{" "}
              <i className="fas fa-angle-double-right" />
            </Link>
          </li>
          <li>
            <Link to="/register/resturant">
              Italian Restaurants in US{" "}
              <i className="fas fa-angle-double-right" />
            </Link>
          </li>
          <li>
            <Link to="/register/voice-of-experts">
              Voice of Experts <i className="fas fa-angle-double-right" />
            </Link>
          </li>
          <li>
            <Link to="/register/travel">
              Travel Agencies <i className="fas fa-angle-double-right" />
            </Link>
          </li>
          <li>
            <Link to="/register/voyager">
              Voyager <i className="fas fa-angle-double-right" />
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  ...bindActionCreators(actions, dispatch),
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
