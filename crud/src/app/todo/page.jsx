import Todo from "@/components/todo/Todo";
import { getTodos } from "@/libs/database/data";

export default async function TodoPage() {
  const todos = await getTodos();

  console.log(todos, "<----ditodopage");
  return (
    <>
      <main className="flex flex-col min-h-screen items-center justify-center gap-5">
        <Todo dataTodos={todos} />
      </main>
    </>
  );
}
