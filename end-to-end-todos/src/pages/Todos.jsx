import AppLayout from "@/components/layout/AppLayout";
import TodoItem from "@/components/todos/TodoItem";
import TodoList from "@/components/todos/TodoList";
import React from "react";

const Todos = () => {
  return (
    <AppLayout>
      <div className="grid grid-cols-2 gap-6">
        <TodoList />
        <TodoItem />
      </div>
    </AppLayout>
  );
};

export default Todos;
