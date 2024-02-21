import * as restaurantDao from "../models/restaurant_dao";

export const createRestaurant = async (name, location, category) => {
  try {
    return await restaurantDao.createRestaurant(name, location, category);
  } catch {
    throw new Error("Something went wrong");
  }
};

export const readRestaurants = async () => {
  try {
    return await restaurantDao.readRestaurants();
  } catch {
    throw new Error("Something went wrong");
  }
};

export const updateRestaurant = async (rid, name, location, category) => {
  try {
    const restaurant = { rid, name, location, category };
    return await restaurantDao.updateRestaurant(restaurant);
  } catch {
    throw new Error("Something went wrong");
  }
};

export const deleteRestaurant = async (rid) => {
  try {
    return await restaurantDao.deleteRestaurant(rid);
  } catch {
    throw new Error("Something went wrong");
  }
};
