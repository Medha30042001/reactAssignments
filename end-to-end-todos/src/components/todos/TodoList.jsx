import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useTodo } from "@/context/TodoContext";

const TodoList = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodo();

  const handleAdd = () => {
    if (!title.trim()) return;
    addTodo(title); // ✅ pass string ONLY
    setTitle("");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Add Todo</h2>

      <div className="flex gap-2">
        <Input
          placeholder="New todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button onClick={handleAdd}>Add</Button>
      </div>
    </div>
  );
};

export default TodoList;
