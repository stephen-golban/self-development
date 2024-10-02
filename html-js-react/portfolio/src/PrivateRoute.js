import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./firebase/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => (
        currentUser ?
        <Component {...props}/> :
        <Redirect to="/admin"/>
      )}/>
  );
};


export default PrivateRoute