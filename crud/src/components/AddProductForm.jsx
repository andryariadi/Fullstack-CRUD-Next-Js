"use client";

import { addProduct } from "@/libs/database/data";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export default function AddProduct() {
  const [modal, setModal] = useState(false);
  const { pending } = useFormStatus();
  const router = useRouter();

  const toggleModal = () => {
    setModal(!modal);
  };

  const [inputProduct, setInputProduct] = useState({
    name: "",
    price: 0,
    slug: "",
  });

  const handleChangeProduct = (e) => {
    const { name, value } = e.target;
    console.log({ name, value }, "<----difunctionchange");
    setInputProduct({ ...inputProduct, [name]: value });
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    try {
      await addProduct(inputProduct);
      router.refresh();
      setInputProduct({ name: "", price: 0, slug: "" });
      setModal(!modal);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(inputProduct, "<---inputproduct");

  return (
    <>
      <div>
        <button onClick={toggleModal} className="btn btn-primary">
          Add +
        </button>
        <input type="checkbox" checked={modal} onChange={toggleModal} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box flex flex-col gap-5">
            <h3 className="font-bold text-center">Add New Product</h3>
            <form>
              <div className="form-control flex flex-col gap-5">
                <input type="text" placeholder="Name" name="name" value={inputProduct.name} onChange={handleChangeProduct} className="input input-bordered input-primary w-full" />
                <input type="number" placeholder="Price" name="price" value={inputProduct.price} onChange={handleChangeProduct} className="input input-bordered input-primary w-full" />
                <input type="text" placeholder="Slug" name="slug" value={inputProduct.slug} onChange={handleChangeProduct} className="input input-bordered input-primary w-full" />
              </div>
              <div className="modal-action">
                <button onClick={toggleModal} type="button" className="btn btn-active btn-ghost">
                  Close
                </button>
                <button type="submit" onClick={handleSubmitProduct} className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
