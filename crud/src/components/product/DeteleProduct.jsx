"use client";

import { deleteProduct } from "@/libs/database/data";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function DeleteProduct(product) {
  const [modal, setModal] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleDeleteProduct = async (slug) => {
    setIsPending(true);
    try {
      await deleteProduct(slug);
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
            <h1 className="font-bold text-center text-base">Are you sure to delete {product.name} ?</h1>
            <div className="modal-action">
              <button onClick={toggleModal} type="button" className="btn btn-active btn-ghost">
                Close
              </button>
              {isPending ? (
                <button type="button" className="btn loading">
                  Deleting...
                </button>
              ) : (
                <button onClick={() => handleDeleteProduct(product.slug)} type="button" className="btn btn-primary">
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
