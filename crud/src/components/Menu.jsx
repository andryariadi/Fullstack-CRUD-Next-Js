"use client";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaUsers } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import Link from "next/link";

export default function Menu() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div>
        <button onClick={toggleModal} className="btn btn-primary tooltip tooltip-primary" data-tip="Menu">
          <div className="text-[#1D232A]">
            <TiThMenu size={23} />
          </div>
        </button>
        <input type="checkbox" checked={modal} onChange={toggleModal} className="modal-toggle" />
        <div className="modal ">
          <div className="modal-box flex flex-col gap-5">
            <h3 className="font-bold text-center">Menu</h3>
            <div className="flex flex-col items-center justify-center gap-y-5">
              <div className="flex items-center justify-center gap-5">
                <Link href="/user" className="flex items-center justify-center gap-3  rounded-md text-[#1D232A] btn btn-secondary">
                  <div>
                    <FaUsers size={28} />
                  </div>
                  <button>User</button>
                </Link>
                <Link href="/product" className="flex items-center justify-center gap-3 rounded-md text-[#1D232A] btn btn-accent">
                  <div>
                    <IoBagHandle size={28} />
                  </div>
                  <button>Product</button>
                </Link>
                <Link href="/todo" className="flex items-center justify-center gap-3  rounded-md text-[#1D232A] btn btn-info">
                  <div>
                    <FaClipboardList size={28} />
                  </div>
                  <button>ToDo</button>
                </Link>
              </div>
              <div>
                <Link href="/" className="flex items-center justify-center rounded-md text-[#1D232A] btn btn-primary btn-sm tooltip tooltip-primary" data-tip="Home">
                  <div>
                    <IoIosHome size={20} />
                  </div>
                </Link>
              </div>
            </div>
            <form action="">
              <div className="modal-action">
                <button type="button" onClick={toggleModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
