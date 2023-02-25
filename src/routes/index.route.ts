import express from "express";


import roomTypeRoute from "./roomtype.route";
import roomRoute from "./room.route";
import userRoute from "./user.route";
import healthRoute from "./health.route";

const router = express.Router();

router.use("/roomtype", roomTypeRoute);
router.use("/room", roomRoute);
router.use("/user", userRoute);

// this monitors my API for downtimes
router.use("/health", healthRoute);

export default router;
