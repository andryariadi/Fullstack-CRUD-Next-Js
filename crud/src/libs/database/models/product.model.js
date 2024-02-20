import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  categories: {
    type: [String],
    required: true,
  },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
