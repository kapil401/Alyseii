import React from "react";
import {renderRoutes} from "react-router-config"
import Root from "../layouts/Root";
import CoreLayout from "../layouts/CoreLayout"
import Login from "../routes/login/components/LoginView"
import { Redirect } from "react-router";

export const redirectRoute = () => {
    return 
  };
  
  export const routes = [
    {
      component: Root,
      routes: [
        {
          path: "/",
          exact: true,
          component: Login,
        },
        {
          path: "/user",
          component: CoreLayout,
          routes: [
            {
              path: "/user/login",
              exact: true,
              component: Login,
            },
          ],
        },        
        {
          path: "",
          component: CoreLayout,
          routes: [
            // {
            //   path: "*",
            //   component: Error404,
            // },
          ],
        },
      ],
    },
];  

export const createRoutes = () => {
    return renderRoutes(routes);
};
  
export default createRoutes;