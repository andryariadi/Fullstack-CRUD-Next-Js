import { connectToDB } from "@/libs/database";
import Product from "@/libs/database/models/product.model";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    if (!slug) {
      throw new Error("Slug is missing!");
    }

    connectToDB();

    const product = await Product.findOne({ slug });

    if (!product) {
      return NextResponse.json({ error: "Detail Product not found!" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch detail product!" }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    if (!slug) {
      throw new Error("Slug is missing!");
    }

    connectToDB();

    const product = await Product.deleteOne({ slug });

    if (!product) {
      return NextResponse.json({ error: "Product not found!" }, { status: 404 });
    }

    return NextResponse.json("Product deleted successfully!", { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to delete product!" }, { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const { slug } = params;
  try {
    if (!slug) {
      throw new Error("Slug is missing!");
    }

    connectToDB();

    const { name, price } = await request.json();

    const updatedProduct = await Product.findOneAndUpdate({ slug }, { name, price }, { new: true });

    if (!updatedProduct) {
      return NextResponse.json({ error: "Product not found!" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product updated successfully!", updatedProduct }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to update product!" }, { status: 500 });
  }
};
