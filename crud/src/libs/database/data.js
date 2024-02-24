import { connectToDB } from ".";
import User from "./models/user.model";

// Action User:
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

// Action Product:
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

// Action Todo:
export const getAllTodos = async () => {
  const res = fetch("http://localhost:3000/api/todo", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch todos!");

  return res.json();
};

export const getTodoById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/todo/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch detail todo!");

  return res.json();
};

export const addTodo = async (todoData) => {
  const res = await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  });

  if (!res.ok) throw new Error("Failed to add todo!");

  return res.json();
};

export const deleteTodo = async (id) => {
  const res = await fetch(`http://localhost:3000/api/todo/${id}`, {
    method: "DELETE",
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to delete todo!");

  return res.json();
};

export const updateTodo = async ({ id, ...todoData }) => {
  const res = await fetch(`http://localhost:3000/api/todo/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  });

  if (!res.ok) throw new Error("Failed to update todo!");

  return res.json();
};
