import AddProduct from "@/components/product/AddProductForm";
import DeleteProduct from "@/components/product/DeteleProduct";
import UpdateProduct from "@/components/product/UpdateProductForm";
import { getAllProducts } from "@/libs/database/data";
import Link from "next/link";
import { IoIosHome } from "react-icons/io";

export default async function ProductPage() {
  const products = await getAllProducts();

  console.log(products, "<-----diproductlists");
  return (
    <>
      <main className="flex flex-col min-h-screen items-center justify-center gap-5">
        <h1 className="text-3xl font-bold mb-7">Products Lists</h1>
        <div className="flex items-center justify-between w-[50%]">
          <AddProduct />
          <Link href="/" className="flex items-center justify-center rounded-md text-[#1D232A] btn btn-primary tooltip tooltip-primary" data-tip="Home">
            <div>
              <IoIosHome size={23} />
            </div>
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
                <th className="w-40">Categories</th>
                <th className="w-40">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <th className="text-sm">{index + 1}</th>
                  <td className="text-sm">{product.name}</td>
                  <td className="text-sm">{product.price}</td>
                  <td className="text-sm">{product.slug}</td>
                  <td className="text-sm">{product.categories}</td>
                  <td>
                    <div className="flex items-center justify-start gap-5">
                      <UpdateProduct {...product} />
                      <DeleteProduct {...product} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
