import axios from "axios";

const getUsers = () => {
  return axios.get(
    "https://deliveryapp-api.herokuapp.com/api/users?page=0&limit=30&name="
  );
};

const createUser = (newUser) => {
  return axios.post("https://deliveryapp-api.herokuapp.com/api/users", newUser);
};

const getUserById = (id) => {
  return axios.get("https://deliveryapp-api.herokuapp.com/api/users/" + id);
};

const deleteUser = (id) => {
  return axios.delete("https://deliveryapp-api.herokuapp.com/api/users/" + id);
};

const updateUser = (id, userData) => {
  return axios.put(
    "https://deliveryapp-api.herokuapp.com/api/users/" + id,
    userData
  );
};

const userServices = {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
};

export default userServices;
