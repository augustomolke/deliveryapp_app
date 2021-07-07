import axios from "axios";

const getRestaurants = (name, page, limit) => {
  let url = `https://deliveryapp-api.herokuapp.com/api/restaurants?page=${page}&limit=${limit}&name=${name}`;
  console.log(url);
  return axios.get(url);
};

const createRestaurant = (newRest) => {
  return axios.post(
    "https://deliveryapp-api.herokuapp.com/api/restaurants",
    newRest
  );
};

const getRestaurantById = (id) => {
  return axios.get(
    "https://deliveryapp-api.herokuapp.com/api/restaurants/" + id
  );
};

const deleteRestaurant = (id) => {
  return axios.delete(
    "https://deliveryapp-api.herokuapp.com/api/restaurants/" + id
  );
};

const updateRestaurant = (id, userData) => {
  return axios.put(
    "https://deliveryapp-api.herokuapp.com/api/restaurants/" + id,
    userData
  );
};

const restaurantServices = {
  getRestaurants,
  createRestaurant,
  getRestaurantById,
  deleteRestaurant,
  updateRestaurant,
};

export default restaurantServices;
