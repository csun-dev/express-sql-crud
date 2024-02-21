import { AppDataSource } from "../../db/dataSource";

export const createRestaurant = async (name, location, category) => {
  try {
    return await AppDataSource.query(
      `
        INSERT INTO restaurants (
          name,
          location,
          category
        ) VALUES (?, ?, ?);
        `,
      [name, location, category]
    );
  } catch {
    throw new Error("Something went wrong");
  }
};

export const readRestaurants = async () => {
  try {
    return await AppDataSource.query(
      `
        SELECT
            id,
            name,
            location,
            category
        FROM restaurants
        `
    );
  } catch {
    throw new Error("Something went wrong");
  }
};

export const updateRestaurant = async (restaurant) => {
  try {
    return await AppDataSource.query(
      `
        UPDATE restaurants
        SET
          name = COALESCE(?, name),
          location = COALESCE(?, location),
          category = COALESCE(?, category)
        WHERE id = ?;
      `,
      [
        restaurant.name,
        restaurant.location,
        restaurant.category,
        restaurant.rid,
      ]
    );
  } catch {
    throw new Error("Something went wrong");
  }
};

export const deleteRestaurant = async (rid) => {
  try {
    return await AppDataSource.query(
      `
        DELETE FROM restaurants
        WHERE id = ${rid}
        `
    );
  } catch {
    throw new Error("Something went wrong");
  }
};
