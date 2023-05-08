import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authConrtoller.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

//router object
const router = express.Router();

//Routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//TEST routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected route path
router.get("/user-auth", requireSignIn, (req, res) => {
  res.send(200).send({ ok: true });
});

export default router;
