import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTodo } from "@/context/TodoContext";
import UpdateTodoModal from "./UpdateTodoModal";
import { cn } from "@/lib/utils";

const TodoItem = () => {
  const { selectedTodo, updateTodo, deleteTodo } = useTodo();
  const [open, setOpen] = useState(false);

  if (!selectedTodo) {
    return <p className="text-muted-foreground">Select a todo</p>;
  }

  return (
    <div className="space-y-4">
      <h2
        className={cn(
          "text-xl font-semibold transition-all",
          selectedTodo.completed && "line-through text-muted-foreground"
        )}
      >
        {selectedTodo.title}
      </h2>

      <div className="flex gap-2">
        <Button
          variant="secondary"
          onClick={async () => {
            await updateTodo(selectedTodo.id, {
              completed: !selectedTodo.completed,
            });
          }}
        >
          {selectedTodo.completed ? "Mark Pending" : "Mark Completed"}
        </Button>

        <Button onClick={() => setOpen(true)}>Edit</Button>

        <Button
          variant="destructive"
          onClick={async () => {
            await deleteTodo(selectedTodo.id);
          }}
        >
          Delete
        </Button>
      </div>

      <UpdateTodoModal open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default TodoItem;
