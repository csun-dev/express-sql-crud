import express from "express";
import * as restaurantController from "../controllers/restaurant_controller";

const restaurantRouter = express.Router();

restaurantRouter.post("/", restaurantController.createRestaurant);
restaurantRouter.get("/", restaurantController.readRestaurants);
restaurantRouter.put("/:rid", restaurantController.updateRestaurant);
restaurantRouter.delete("/:rid", restaurantController.deleteRestaurant);

export default restaurantRouter;
