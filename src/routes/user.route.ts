import express from "express";
import userController from "../controllers/user.controller";

import { validateUserInput } from "../middlewares/validation.middleware";
import authenticate from "../middlewares/authenticate.middleware";

const router = express.Router();

router.post("/register", validateUserInput("user"), userController.createUser);
router.post("/login", validateUserInput("user"), userController.fetchUser);
router.patch("/update", authenticate, userController.updateUser);
router.post("/logout", userController.logoutUser);

export default router;
