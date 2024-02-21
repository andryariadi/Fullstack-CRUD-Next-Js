import { getProductBySlug } from "@/libs/database/data";

export default async function ProductDetailPage({ params }) {
  const { slug } = params;

  const product = await getProductBySlug(slug);

  console.log(product, "<-----diproductdetail");
  return (
    <>
      <div className="flex items-center justify-center h-screen">{product.slug}</div>
    </>
  );
}
