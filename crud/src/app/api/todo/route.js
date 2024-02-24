import { connectToDB } from "@/libs/database";
import Todo from "@/libs/database/models/todo.model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectToDB();

    const todos = await Todo.find();

    if (!todos) {
      return NextResponse.json({ error: "Todos not found!" }, { status: 404 });
    }

    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to fetch todos!" }, { status: 500 });
  }
};

export const POST = async (request) => {
  const { title, status, categories } = await request.json();
  try {
    connectToDB();

    const newTodo = new Todo({
      title,
      status,
      categories,
    });

    await newTodo.save();

    return NextResponse.json({ message: "Todo added successfully!", newTodo }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to add todo!" }, { status: 500 });
  }
};
