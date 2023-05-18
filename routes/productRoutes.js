import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  categoryProductController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
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

router.get("/get-product", getProductController);

router.get("/get-product/:slug", getSingleProductController);

router.get("/product-photo/:pid", productPhotoController);

router.delete("/delete-product/:pid", deleteProductController);

router.post("/product-filters", productFilterController);

router.get("/product-count", productCountController);

router.get("/product-list/:page", productListController);

router.get("/search/:keyword", searchProductController);

router.get("/related-product/:pid/:cid", relatedProductController);

router.get("/product-category/:slug", categoryProductController);

export default router;
