import express from "express";
import { isAdmin, requireSignIn } from "./../middleware/authMiddleware";
const router = express.Router();

//routes
router.post(
  "create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

export default router;
