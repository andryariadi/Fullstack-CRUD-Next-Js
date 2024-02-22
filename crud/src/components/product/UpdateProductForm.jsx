"use client";

import { updateProduct } from "@/libs/database/data";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";

export default function UpdateProduct(product) {
  const [modal, setModal] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const toggleModal = () => {
    setModal(!modal);
  };

  const [inputProduct, setInputProduct] = useState({
    name: product.name,
    price: product.price,
    slug: product.slug,
    categories: product.categories,
  });

  const handleChangeProduct = (e) => {
    const { name, value } = e.target;
    console.log({ name, value }, "<----difunctionchange");
    setInputProduct({ ...inputProduct, [name]: value });
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await updateProduct({ slug: product.slug, ...inputProduct });
      setIsPending(false);
      router.refresh();
      setModal(!modal);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(product, "<---diupdateproduct");
  console.log(inputProduct, "<---inputupdateproduct");

  return (
    <>
      <div>
        <button onClick={toggleModal} className="btn btn-primary btn-sm">
          <div className="text-[#1D232A]">
            <BiSolidEditAlt size={20} />
          </div>
        </button>
        <input type="checkbox" checked={modal} onChange={toggleModal} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box flex flex-col gap-5">
            <h3 className="font-bold text-center">Update {product.name}</h3>
            <form onSubmit={handleUpdateProduct}>
              <div className="form-control flex flex-col gap-5">
                <input type="text" placeholder="Name" name="name" value={inputProduct.name} onChange={handleChangeProduct} className="input input-bordered input-primary w-full" />
                <input type="number" placeholder="Price" name="price" value={inputProduct.price} onChange={handleChangeProduct} className="input input-bordered input-primary w-full" />
                <input type="text" placeholder="Slug" name="slug" value={inputProduct.slug} onChange={handleChangeProduct} className="input input-bordered input-primary w-full" />
                <select name="categories" value={inputProduct.categories} onChange={handleChangeProduct} className="select select-primary w-full">
                  <option disabled selected>
                    Category
                  </option>
                  <option value="Electronic">Electronic</option>
                  <option value="Food">Food</option>
                  <option value="Shirt">Shirt</option>
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
