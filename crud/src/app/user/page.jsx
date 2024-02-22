import AddUser from "@/components/user/AddUserForm";
import { getUsers } from "@/libs/database/data";
import Link from "next/link";
import { IoBagHandle } from "react-icons/io5";

export default async function UserPage() {
  const users = await getUsers();

  console.log(users, "<-----diuserspage");
  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-5">
      <h1 className="text-3xl font-bold mb-7">Users Lists</h1>
      <div className="flex items-center justify-between w-[50%]">
        <AddUser />
        <Link href="/">
          <button className="btn btn-accent">
            <div className="text-[#1D232A]">
              <IoBagHandle size={23} />
            </div>
          </button>
        </Link>
      </div>
      <div className="overflow-y-auto w-[50%] max-h-[400px] scroll-table">
        <table className="table table-zebra table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr className="text-base">
              <th className="w-10">ID</th>
              <th className="w-40">Name</th>
              <th className="w-40">Email</th>
              <th className="w-40">Gender</th>
              <th className="w-40">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <div className="flex items-center justify-start gap-5">
                    <div>Edit</div>
                    <div>Delete</div>
                    {/* <UpdateProduct {...product} /> */}
                    {/* <DeleteProduct {...product} /> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
