import { connectToDB } from "@/libs/database";
import Product from "@/libs/database/models/product.model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectToDB();

    const products = await Product.find();

    if (!products) {
      return NextResponse.json({ error: "Products not found!" }, { status: 404 });
    }

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to fetch products!" }, { status: 500 });
  }
};

export const POST = async (request) => {
  const { name, price, slug, categories } = await request.json();
  try {
    connectToDB();

    // Buat instance produk baru
    const newProduct = new Product({
      name,
      price,
      slug,
      categories,
    });

    // Simpan produk ke dalam database
    await newProduct.save();

    // Kirim respons berhasil
    return NextResponse.json({ message: "Product added successfully!", newProduct }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  }
};
