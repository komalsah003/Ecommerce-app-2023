import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getProductPhotoController,
  getSingleProductController,
  productFilterController,
  updateProductController,
} from "../controllers/productContoller.js";
import formidable from "express-formidable";

const router = express.Router();

//router
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get product
router.get("/get-product", getProductController);

router.get("/get-product/:slug", getSingleProductController);

router.get("/product-photo/:pid", getProductPhotoController);

router.delete("/delete-product/:pid", deleteProductController);

router.post("/product-filters", productFilterController);

export default router;
