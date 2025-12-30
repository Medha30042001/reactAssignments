import React, { useEffect, useState } from 'react'
import { getTodosById } from '../api/todoService'
import { useParams } from 'react-router-dom'

const TodoDetails = () => {

  const {id} = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    getTodosById(id).then(res => setTodo(res.data))
  }, [id]);

  if(!todo) return <p>Loading...</p>

  return (
    <>
      <h4>{todo.id}</h4>
      <h4>{todo.title}</h4>
      <h4>{todo.userId}</h4>
      <h4>{todo.completed? "Completed" : "Not Completed"}</h4>
    </>
  )
}

export default TodoDetails