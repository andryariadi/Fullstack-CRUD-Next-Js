"use client";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../Menu";
import { getTodos } from "@/libs/database/data";
import { getAllTodos } from "@/libs/redux/TodoSlice";
import { useEffect } from "react";
import AddTodo from "./AddTodoForm";

export default function Todo({ dataTodos }) {
  const todos = useSelector((state) => state.todoStore.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos(dataTodos));
  }, [dataTodos, dispatch]);

  console.log(todos, "<-----ditodocomponent");
  return (
    <>
      <h1 className="text-3xl font-bold mb-7">Todo Lists</h1>
      <div className="flex items-center justify-between w-[50%]">
        <AddTodo />
        <Menu />
      </div>
      <div className="overflow-y-auto w-[50%] max-h-[400px] scroll-table">
        <table className="table table-zebra table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr className="text-base">
              <th className="w-10">ID</th>
              <th className="w-40">Title</th>
              <th className="w-40">Status</th>
              <th className="w-40">Categories</th>
              <th className="w-40">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <th className="text-sm">{index + 1}</th>
                <td className="text-sm">{todo.title}</td>
                <td className="text-sm">{todo.status}</td>
                <td className="text-sm">{todo.categories}</td>
                <td>
                  <div className="flex items-center justify-start gap-5">
                    <div>Edit</div>
                    <div>Delete</div>
                    {/* <UpdateProduct {...product} />
                    <DeleteProduct {...product} /> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
