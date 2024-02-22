"use client";

import { addUser } from "@/libs/database/actions/action";
import { addProduct } from "@/libs/database/data";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ImUserPlus } from "react-icons/im";

export default function AddUser() {
  const [modal, setModal] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div>
        <button onClick={toggleModal} className="btn btn-primary">
          <div className="text-[#1D232A]">
            <ImUserPlus size={23} />
          </div>
        </button>
        <input type="checkbox" checked={modal} onChange={toggleModal} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box flex flex-col gap-5">
            <h3 className="font-bold text-center">Add New User</h3>
            <form
              action={async (formData) => {
                await addUser(formData);
                setModal(!modal);
              }}
            >
              <div className="form-control flex flex-col gap-5">
                <input type="text" placeholder="Name" name="name" className="input input-bordered input-primary w-full" />
                <input type="email" placeholder="Email" name="email" className="input input-bordered input-primary w-full" />
                <select name="gender" className="select select-primary w-full">
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
