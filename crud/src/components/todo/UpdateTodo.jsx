"use client";

import { updateTodo } from "@/libs/database/data";
import { editTodo } from "@/libs/redux/TodoSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";

export default function UpdateTodo(todo) {
  const [modal, setModal] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const toggleModal = () => {
    setModal(!modal);
  };

  const [inputTodo, setInputTodo] = useState({
    title: todo.title,
    status: todo.status,
    categories: todo.categories,
  });

  useEffect(() => {
    if (todo) {
      setInputTodo({
        title: todo.title,
        status: todo.status,
        categories: todo.categories,
      });
    }
  }, [todo]);

  const handleChangeTodo = (e) => {
    const { name, value } = e.target;
    console.log({ name, value }, "<----difunctionchange");
    setInputTodo({ ...inputTodo, [name]: value });
  };

  const handleSubmitTodo = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      const updateNewTodo = await updateTodo({ id: todo._id, ...inputTodo });
      dispatch(editTodo(updateNewTodo));
      setIsPending(false);
      router.refresh();
      setModal(!modal);
    } catch (error) {
      console.log(error);
    }
  };

  console.log({ inputTodo }, "<---inputTodo");

  return (
    <>
      <div>
        <button onClick={toggleModal} className="btn btn-accent btn-sm font-normal">
          <div className="text-[#1D232A]">
            <BiSolidEditAlt size={20} />
          </div>
        </button>
        <input type="checkbox" checked={modal} onChange={toggleModal} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box flex flex-col gap-5">
            <h3 className="font-bold text-center">Update {todo.title}</h3>
            <form onSubmit={handleSubmitTodo}>
              <div className="form-control flex flex-col gap-5">
                <input type="text" placeholder="Title" name="title" value={inputTodo.title} onChange={handleChangeTodo} className="input input-bordered input-primary w-full" />
                <select name="status" id="status" value={inputTodo.status} onChange={handleChangeTodo} className="select select-primary w-full">
                  <option value="Pending">Pending</option>
                  <option value="On Progress">On Progress</option>
                  <option value="Done">Done</option>
                </select>
                <select name="categories" id="categories" value={inputTodo.categories} onChange={handleChangeTodo} className="select select-primary w-full">
                  <option value="IT">IT</option>
                  <option value="Religion">Religion</option>
                  <option value="General">General</option>
                </select>
              </div>
              <div className="modal-action">
                <button onClick={toggleModal} type="button" className="btn btn-active btn-ghost">
                  Close
                </button>
                {isPending ? (
                  <button type="submit" className="btn loading">
                    Updating...
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
