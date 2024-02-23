import Menu from "@/components/menu";
import AddUser from "@/components/user/AddUserForm";
import DeleteUser from "@/components/user/DeleteUser";
import UpdateUser from "@/components/user/UpdateUserForm";
import { getUsers } from "@/libs/database/data";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";

export default async function UserPage() {
  const users = await getUsers();

  console.log(users, "<-----diuserspage");
  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-5">
      <h1 className="text-3xl font-bold mb-7">Users Lists</h1>
      <div className="flex items-center justify-between w-[50%]">
        <AddUser />
        <Menu />
        {/* <Link href="/" className="tooltip tooltip-accent" data-tip="Menu">
          <button className="btn btn-accent">
            <div className="text-[#1D232A]">
              <TiThMenu size={23} />
            </div>
          </button>
        </Link> */}
      </div>
      <div className="overflow-y-auto w-[50%] max-h-[400px] scroll-table">
        <table className="table table-zebra table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr className="text-base">
              <th className="w-10">ID</th>
              <th className="w-40">Name</th>
              <th className="w-40">Email</th>
              <th className="w-40">Gender</th>
              <th className="w-20">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th className="text-sm">{index + 1}</th>
                <td className="text-sm">{user.name}</td>
                <td className="text-sm">{user.email}</td>
                <td className="text-sm">{user.gender}</td>
                <td className="text-sm">
                  <div className="flex items-center justify-start gap-5">
                    <UpdateUser user={user} />
                    <DeleteUser user={user} />
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
