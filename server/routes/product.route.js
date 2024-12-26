import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

//get all existing products
router.get('/', getProducts)

//allows us to create a product
router.post("/", createProduct);

//allows us to update an existing product.for updating some fields in the product, we use router.patch..to update all fields, we use router.put()
router.put("/:id", updateProduct);
//delete product with the unique id give by mongodb

router.delete("/:id", deleteProduct)


export default router;