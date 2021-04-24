import { Fragment, useEffect } from "react";
import { renderRoutes } from "react-router-config";
import AuthHeader from "../../../components/Headers/AuthHeader";
import React from "react";
import Footer from "../../../components/Footer/Footer";
import { fetchUserRoles } from "../modules/auth";
import { useSelector, useDispatch } from "react-redux";

export function AuthWrapperView({ children, route }) {
  
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(fetchUserRoles());
  }, []);

  return (
    <Fragment>
      <AuthHeader />
      <div className="main__content" style={{ minHeight: "53.75rem" }}>
        <div className="site__width">
          <div className="register_form">
            <div className="card--block">
              {children}
              {renderRoutes(route.routes)}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default AuthWrapperView;
