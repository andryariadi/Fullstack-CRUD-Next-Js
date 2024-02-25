import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";

export default async function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-5 ">
      {/* <Menu /> */}

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
    </main>
  );
}
