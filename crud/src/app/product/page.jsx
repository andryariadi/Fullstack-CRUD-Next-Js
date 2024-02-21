import AddProduct from "@/components/AddProductForm";
import { getAllProducts } from "@/libs/database/data";
import Link from "next/link";

export default async function ProductPage() {
  const products = await getAllProducts();

  console.log(products, "<-----diproductlists");
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center gap-5">
        <h1 className="text-3xl font-bold mb-7">Products Lists</h1>
        <div className="flex items-center justify-between w-[50%]">
          <AddProduct />
          <Link href="/">
            <button className="btn btn-accent">Users</button>
          </Link>
        </div>
        <div className="overflow-y-auto w-[50%] max-h-[400px] scroll-table">
          <table className="table table-zebra table-xs table-pin-rows table-pin-cols">
            <thead>
              <tr className="text-base">
                <th className="w-10">ID</th>
                <th className="w-40">Name</th>
                <th className="w-40">Price</th>
                <th className="w-40">Slug</th>
                <th className="w-40">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.index}>
                  <th>{index + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.slug}</td>
                  <td>
                    <div className="flex items-center justify-start gap-5">
                      <Link href={`/product/${product.slug}`}>
                        <button className="btn btn-info">Edit</button>
                      </Link>
                      <Link href={`/product/${product.slug}`}>
                        <button className="btn btn-error">Delete</button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
