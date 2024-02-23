"use client";

import { updateUser } from "@/libs/database/actions/action";
import { useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import ButtonSubmit from "./ButtonAdd";

export default function UpdateUser({ user }) {
  const [modal, setModal] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [inputData, setInputData] = useState({
    name: user.name,
    email: user.email,
    gender: user.gender,
  });

  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

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
            <h3 className="font-bold text-center">Update {user.name}</h3>
            <form
              action={async (formData) => {
                await updateUser(formData);
                setModal(!modal);
              }}
            >
              <div className="form-control flex flex-col gap-5">
                <input type="hidden" name="id" value={user._id} />
                <input type="text" name="name" value={inputData.name} onChange={handleChangeUser} className="input input-bordered input-primary w-full" />
                <input type="email" name="email" value={inputData.email} onChange={handleChangeUser} className="input input-bordered input-primary w-full" />
                <select name="gender" id="gender" value={inputData.gender} onChange={handleChangeUser} className="select select-primary w-full">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="modal-action">
                <button onClick={toggleModal} type="button" className="btn btn-active btn-ghost">
                  Close
                </button>
                <ButtonSubmit title="Update" titlePending="Updating..." />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
