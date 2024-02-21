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

export const getAllProducts = async () => {
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch products!");

  return res.json();
};

export const getProductBySlug = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/product/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch detail products!");

  return res.json();
};
