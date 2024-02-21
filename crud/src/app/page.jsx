import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/product" className="bg-rose-500 px-5 py-3 rounded-md text-white">
        <button>Product</button>
      </Link>
    </main>
  );
}
