import express from "express";
import { registerController } from "../controllers/authConrtoller.js";

//route object
const router = express.Router();

//Routing ||METHOD POST
router.post("/register", registerController);

export default router;
