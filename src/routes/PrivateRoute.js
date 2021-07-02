import { Route, Redirect } from "react-router";
import authServices from "../services/authServices";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        let curUsr = authServices.getCurrentUser();
        if (curUsr && hasPermission(rest.permissions)) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

const hasPermission = (requiredPermission) => {
  let arrayPermissions = requiredPermission.split(", ");
  let allowed = false;
  arrayPermissions = arrayPermissions.filter((p) =>
    authServices.hasPermission(p)
  );

  arrayPermissions.length > 0 ? (allowed = true) : (allowed = false);

  return allowed;
};

export default PrivateRoute;
