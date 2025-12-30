import React, { useEffect, useState } from 'react'
import { getTodos } from '../api/todoService'
import { Link } from 'react-router-dom';

function TodoList() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((res) => {setTodos(res.data)});
  }, []);

  return (
    <>
      <h2>Todos</h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
          <span> - {todo.completed ? "Completed" : "Not Completed"}</span>
        </div>
      ))}
    </>
  )
}

export default TodoList