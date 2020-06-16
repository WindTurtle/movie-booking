import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import LoginAdmin from "../../pages/LoginAdmin";
const LoginAdminLayout = (props) => {
  return (
    <Fragment>
      <LoginAdmin />
    </Fragment>
  );
};
export const LoginAdminTemplate = (props) => {
  return (
    <Route
      path={props.path}
      {...props.exact}
      render={(propsComponent) => {
        return (
          <LoginAdminLayout>
            <props.Component {...propsComponent} />
          </LoginAdminLayout>
        );
      }}
    />
  );
};
