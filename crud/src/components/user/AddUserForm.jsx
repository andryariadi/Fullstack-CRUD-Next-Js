"use client";

import { addUser } from "@/libs/database/actions/action";
import { useRef, useState } from "react";
import { ImUserPlus } from "react-icons/im";
import ButtonSubmit from "./ButtonAdd";

export default function AddUser() {
  const [modal, setModal] = useState(false);
  const ref = useRef();

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div>
        <button onClick={toggleModal} className="btn btn-primary tooltip tooltip-primary font-normal" data-tip="Add User">
          <div className="text-[#1D232A]">
            <ImUserPlus size={23} />
          </div>
        </button>
        <input type="checkbox" checked={modal} onChange={toggleModal} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box flex flex-col gap-5">
            <h3 className="font-bold text-center">Add New User</h3>
            <form
              ref={ref}
              action={async (formData) => {
                ref.current.reset();
                await addUser(formData);
                setModal(!modal);
              }}
            >
              <div className="form-control flex flex-col gap-5">
                <input type="text" placeholder="Name" name="name" className="input input-bordered input-primary w-full" />
                <input type="email" placeholder="Email" name="email" className="input input-bordered input-primary w-full" />
                <select name="gender" id="gender" className="select select-primary w-full">
                  <option selected disabled>
                    Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="modal-action">
                <button onClick={toggleModal} type="button" className="btn btn-active btn-ghost">
                  Close
                </button>
                <ButtonSubmit title="Save" titlePending="Saving..." />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
