import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useStoreState } from "easy-peasy";

const AdminRoute = ({ component: Component, ...rest }) => {
  const adminloggedIn = useStoreState(
    (store) => store.accountModel.is_user_admin
  );
  console.log("this is the logged in check inside private route");
  console.log(loggedIn);
  return adminloggedIn ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/register" />
  );
};

export default AdminRoute;
