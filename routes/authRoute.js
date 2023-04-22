import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/authConrtoller.js";

//router object
const router = express.Router();

//Routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

export default router;
