import { connectToDB } from ".";
import User from "./models/user.model";

export const getUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};

export const getUserById = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch detail user!");
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

export const addProduct = async (productData) => {
  const res = await fetch("http://localhost:3000/api/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to add product!");

  return res.json();
};

export const deleteProduct = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/product/${slug}`, {
    method: "DELETE",
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to delete product!");

  return res.json();
};

export const updateProduct = async ({ slug, ...productData }) => {
  const res = await fetch(`http://localhost:3000/api/product/${slug}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to update product!");

  return res.json();
};
