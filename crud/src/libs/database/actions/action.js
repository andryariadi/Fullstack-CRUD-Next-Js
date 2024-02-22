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
