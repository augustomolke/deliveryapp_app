import axios from "axios";

const login = (userEntry) => {
  return axios.post(
    "https://deliveryapp-api.herokuapp.com/api/users/login",
    userEntry
  );
};

const logout = (headers) => {
  return axios.post(
    "https://deliveryapp-api.herokuapp.com/api/users/logout",
    {},
    headers
  );
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const hasPermission = (permission) => {
  let currentPermission = getCurrentUser().data.permissions;
  return currentPermission == permission;
};

const authHeader = () => {
  const user = getCurrentUser();

  if (user && user.token) {
    return { headers: { authorization: user.token } };
  } else {
    return {};
  }
};

const authServices = {
  login,
  logout,
  getCurrentUser,
  authHeader,
  hasPermission,
};

export default authServices;
