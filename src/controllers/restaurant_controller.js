import * as restaurantService from "../services/restaurant_service";

export const createRestaurant = async (req, res, next) => {
  try {
    const { name, location, category } = req.body;

    if (!name || !location || !category) {
      throw new Error("Something is missing");
    }

    await restaurantService.createRestaurant(name, location, category);

    return res.status(201).json({ message: "Success creating restaurant" });
  } catch (error) {
    next(error);
  }
};

export const readRestaurants = async (req, res, next) => {
  try {
    const restaurants = await restaurantService.readRestaurants();

    return res.status(200).json(restaurants);
  } catch (error) {
    next(error);
  }
};

export const updateRestaurant = async (req, res, next) => {
  try {
    const { rid } = req.params;
    const { name, location, category } = req.body;

    await restaurantService.updateRestaurant(rid, name, location, category);

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    next(error);
  }
};

export const deleteRestaurant = async (req, res, next) => {
  try {
    const { rid } = req.params;

    await restaurantService.deleteRestaurant(rid);

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    next(error);
  }
};
