import TodoForm from "@/components/todo-form";
import Todolist from "@/components/todo-list";
import { connectDB } from "@/lib/db";
import { CheckCircle } from "lucide-react";

export default async function Home() {
  await connectDB()
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-zinc-950 p-6 sm:p-12 md:p-24">
      <main className="w-full max-w-2xl mx-auto space-y-8">
        <header className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground">
              <CheckCircle size={24} weight='bold' />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
              Quest Log
            </h1>
          </div>
          <p className="text-slate-500 dark:text-zinc-400">
            Organize your daily tasks and achieve your goals.
          </p>
        </header>
        <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
          <TodoForm />
          <Todolist />
        </section>

        <footer>
          <p>
            Powered by Next.js, Mongoose & Tanstack Query
          </p>
        </footer>
      </main>
    </div>
  );
}




/*

1. install app
2. install shadcn
3. install mongoose 
4. install tanstac query
5. create query provider folder and component and 
then wrap children inside it in layout.js
6. install shadcn sooner to implement interactive alert functionality
7. use it in layout.js
8. create ui in page js
9. now create todo form compon 
10. install input component
11. now to add mutatn functionality in form, we nned to create server actn
12. So for that we need a model for db 
13. Now we can create server actn inside actn folder
// zod used add validatn to data such as data is valid or not on client side
so we need to create my schema folder
14. install zod npm i zod
// safeParse checs data is vallid or not




lucide icon lib comes with shadcn

*/