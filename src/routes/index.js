import express from "express";
import restaurantRouter from "./restaurant_router";

const router = express.Router();

router.use("/", restaurantRouter);

export default router;
