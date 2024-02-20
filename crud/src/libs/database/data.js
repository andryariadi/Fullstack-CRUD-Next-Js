import { connectToDB } from ".";
import Product from "./models/product.model";

export const getProducts = async () => {
  try {
    connectToDB();

    const products = await Product.find();
    return products;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
