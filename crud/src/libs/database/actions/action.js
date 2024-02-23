"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "..";
import User from "../models/user.model";

export const addUser = async (formData) => {
  const { name, email, gender } = Object.fromEntries(formData);
  try {
    connectToDB();

    const newUser = new User({
      name,
      email,
      gender,
    });

    await newUser.save();
    console.log("User added successfully!");

    revalidatePath("/user");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user!");
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();

    await User.findByIdAndDelete(id);
    console.log("User deleted successfully!");

    revalidatePath("/user");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user!");
  }
};

export const updateUser = async (formData) => {
  const { id, name, email, gender } = Object.fromEntries(formData);
  try {
    connectToDB();

    const updateFields = {
      name,
      email,
      gender,
    };

    await User.findByIdAndUpdate(id, updateFields);

    console.log("User updated successfully!");

    revalidatePath("/user");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user!");
  }
};
