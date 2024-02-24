"use client";

import { deleteProduct, deleteTodo } from "@/libs/database/data";
import { deletingTodo } from "@/libs/redux/TodoSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";

export default function DeleteTodo(todo) {
  const [modal, setModal] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const disptach = useDispatch();

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleDeleteTodo = async (id) => {
    setIsPending(true);
    try {
      await deleteTodo(id);
      disptach(deletingTodo({ _id: id }));
      setIsPending(false);
      router.refresh();
      setModal(!modal);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <button onClick={toggleModal} className="btn btn-error btn-sm">
          <div className="text-[#1D232A]">
            <RiDeleteBin6Fill size={20} />
          </div>
        </button>
        <input type="checkbox" checked={modal} onChange={toggleModal} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box flex flex-col gap-5">
            <h1 className="font-bold text-center text-base">Are you sure to delete {todo.title} ?</h1>
            <div className="modal-action">
              <button onClick={toggleModal} type="button" className="btn btn-active btn-ghost">
                Close
              </button>
              {isPending ? (
                <button type="button" className="btn loading">
                  Deleting...
                </button>
              ) : (
                <button onClick={() => handleDeleteTodo(todo._id)} type="button" className="btn btn-primary">
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
