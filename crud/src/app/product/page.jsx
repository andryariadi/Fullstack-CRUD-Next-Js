import { getAllProducts } from "@/libs/database/data";
import Link from "next/link";

export default async function ProductPage() {
  //   const products = await getProducts();
  const products = await getAllProducts();

  console.log(products, "<-----diproductlists");
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        {products.map((product) => (
          <Link key={product.slug} href={`/product/${product.slug}`} className="bg-rose-500 px-5 py-3 rounded-md text-white">
            <button>Product Detail</button>
          </Link>
        ))}
      </div>
    </>
  );
}
