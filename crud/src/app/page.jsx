import Menu from "@/components/menu";
import { usePathname } from "next/navigation";

export default async function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-5 ">
      <Menu />
    </main>
  );
}
