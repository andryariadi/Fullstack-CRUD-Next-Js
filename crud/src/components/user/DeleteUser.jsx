"use client";

import { deleteUser } from "@/libs/database/actions/action";
import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import ButtonSubmit from "./ButtonAdd";

export default function DeleteUser({ user }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
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
            <h1 className="font-bold text-center text-base">Are you sure to delete {user.name} ?</h1>
            <div className="modal-action">
              <button onClick={toggleModal} type="button" className="btn btn-active btn-ghost">
                Close
              </button>
              <form
                action={async (formData) => {
                  await deleteUser(formData);
                  setModal(!modal);
                }}
              >
                <input type="hidden" name="id" value={user._id} />
                <ButtonSubmit title="Delete" titlePending="Deleting..." />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
