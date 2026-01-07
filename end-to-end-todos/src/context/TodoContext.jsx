import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { todoService } from "@/services/todo.service";

const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      fetchTodos();
    } else {
      setTodos([]);
      setSelectedTodo(null);
    }
  }, [user]);

  const fetchTodos = async () => {
    setLoading(true);

    const snapshot = await todoService.getTodos(user.uid);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setTodos(data);

    // ✅ keep selectedTodo in sync
    if (selectedTodo) {
      const updated = data.find((t) => t.id === selectedTodo.id);
      setSelectedTodo(updated || null);
    }

    setLoading(false);
  };

  const addTodo = async (title) => {
    await todoService.addTodo(user.uid, {
      title, // ✅ always string
      completed: false,
      createdAt: Date.now(),
    });
    fetchTodos();
  };

  const updateTodo = async (todoId, data) => {
    await todoService.updateTodo(user.uid, todoId, data);
    fetchTodos();
  };

  const deleteTodo = async (todoId) => {
    await todoService.deleteTodo(user.uid, todoId);

    // ✅ clear selection if deleted
    if (selectedTodo?.id === todoId) {
      setSelectedTodo(null);
    }

    fetchTodos();
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        selectedTodo,
        setSelectedTodo,
        loading,
        addTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

/* ✅ THIS IS WHAT YOU WERE MISSING */
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used inside TodoProvider");
  }
  return context;
};
