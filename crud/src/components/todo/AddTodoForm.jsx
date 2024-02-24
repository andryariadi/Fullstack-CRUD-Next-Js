"use client";

import { createTodo } from "@/libs/database/data";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoBagAdd } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addTodo } from "@/libs/redux/TodoSlice";

export default function AddTodo() {
  const [modal, setModal] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const disptach = useDispatch();
  const router = useRouter();

  const toggleModal = () => {
    setModal(!modal);
  };

  const [inputTodo, setInputTodo] = useState({
    title: "",
    status: "",
    categories: "",
  });

  const handleChangeTodo = (e) => {
    const { name, value } = e.target;
    console.log({ name, value }, "<----difunctionchange");
    setInputTodo({ ...inputTodo, [name]: value });
  };

  const handleSubmitTodo = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      const newTodo = await createTodo(inputTodo);
      setIsPending(false);
      disptach(addTodo(newTodo));
      router.refresh();
      setInputTodo({ title: "", status: "", categories: "" });
      setModal(!modal);
    } catch (error) {
      console.log(error);
    }
  };

  console.log({ inputTodo }, "<---inputTodo");

  return (
    <>
      <div>
        <button onClick={toggleModal} className="btn btn-primary tooltip tooltip-primary font-normal" data-tip="Add Product">
          <div className="text-[#1D232A]">
            <IoBagAdd size={23} />
          </div>
        </button>
        <input type="checkbox" checked={modal} onChange={toggleModal} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box flex flex-col gap-5">
            <h3 className="font-bold text-center">Add New Todo</h3>
            <form onSubmit={handleSubmitTodo}>
              <div className="form-control flex flex-col gap-5">
                <input type="text" placeholder="Title" name="title" value={inputTodo.title} onChange={handleChangeTodo} className="input input-bordered input-primary w-full" />
                <select name="status" value={inputTodo.status} onChange={handleChangeTodo} className="select select-primary w-full">
                  <option value="" disabled>
                    Status
                  </option>
                  <option value="Pending">Pending</option>
                  <option value="On Progress">On Progress</option>
                  <option value="Done">Done</option>
                </select>
                <select name="categories" value={inputTodo.categories} onChange={handleChangeTodo} className="select select-primary w-full">
                  <option value="" disabled>
                    Category
                  </option>
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
                    Saving...
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Save
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
