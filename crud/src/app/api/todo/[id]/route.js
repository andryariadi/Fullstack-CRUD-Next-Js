import { connectToDB } from "@/libs/database";
import { NextResponse } from "next/server";
import Todo from "@/libs/database/models/todo.model";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    connectToDB();

    const todo = await Todo.findById(id);

    if (!todo) {
      return NextResponse.json({ error: "Detail todo not found!" }, { status: 404 });
    }

    return NextResponse.json(todo, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to fetch detail todo!" }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    if (!id) {
      throw new Error("ID is missing");
    }
    connectToDB();

    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return NextResponse.json({ error: "Todo not found!" }, { status: 404 });
    }

    return NextResponse.json("Todo deleted successfully!", { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to delete todo!" }, { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const { id } = params;

  try {
    connectToDB();

    const { title, status, categories } = await request.json();

    const todo = await Todo.findByIdAndUpdate(
      id,
      {
        title,
        status,
        categories,
      },
      {
        new: true,
      }
    );

    if (!todo) {
      return NextResponse.json({ error: "Todo not found!" }, { status: 404 });
    }

    return NextResponse.json({ message: "Todo updated successfully!", todo }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to update todo!" }, { status: 500 });
  }
};
