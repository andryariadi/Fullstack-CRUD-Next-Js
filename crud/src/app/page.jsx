import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-5">
      <Link href="/product" className="bg-rose-500 px-5 py-3 rounded-md text-white">
        <button>Product</button>
      </Link>
      <Link href="/user" className="bg-rose-500 px-5 py-3 rounded-md text-white">
        <button>User</button>
      </Link>
    </main>
  );
}
