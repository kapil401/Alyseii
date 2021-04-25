import React from "react";
import { renderRoutes } from "react-router-config";
import Root from "../layouts/Root";
import LoginView from "../routes/login/components/LoginView";
import { Redirect } from "react-router";
import { AuthWrapperView } from "./AuthWrapper/components/AuthWrapperView";
import AuthLayout from "../layouts/Authlayout";
import RegisterView from "./register/components/RegisterView";
import { FormView } from "./register/components/FormView";

export const redirectRoute = () => {
  return <Redirect to="/register" />;
};

export const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: redirectRoute,
      },
      {
        path: "/register",
        component: AuthLayout,
        routes: [
          {
            path: "/register",
            component: AuthWrapperView,
            routes: [
              {
                path: "/register",
                exact: true,
                component: RegisterView,
              },
              {
                path: "/register/:role",
                exact: true,
                component: FormView,
              },
            ],
          },
        ],
      },
      {
        path: "/login",
        component: AuthLayout,
        routes: [
          {
            path: "/login",
            component: AuthWrapperView,
            routes: [
              {
                path: "/login/:role",
                exact: true,
                component: LoginView,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const createRoutes = () => {
  return renderRoutes(routes);
};

export default createRoutes;
