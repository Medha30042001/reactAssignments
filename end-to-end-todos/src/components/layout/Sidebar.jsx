import React from "react";
import { useTodo } from "@/context/TodoContext";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const { todos = [], selectedTodo, setSelectedTodo } = useTodo();
    console.log(todos);

  return (
    <aside className="w-64 border-r bg-background">
      <ul className="p-4 space-y-2">
        {todos.length === 0 ? (
          <li className="text-sm text-muted-foreground">
            No todos yet
          </li>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => setSelectedTodo(todo)}
              className={cn(
                "cursor-pointer rounded-md px-3 py-2 text-sm hover:bg-muted transition",
                selectedTodo?.id === todo.id && "bg-muted font-medium"
              )}
            >
              {todo.title}
            </li>
          ))
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
