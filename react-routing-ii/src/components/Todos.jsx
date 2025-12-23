import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"

const Todos = () => {

    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => setTodos(data.slice(0, 10)))
    }, [])

  return (
    <>
        <div className="todoContainer">
            {todos.map(todo => (
                <NavLink key={todo.id} 
                    to={`/todos/${todo.id}`}
                    
                >Todo {todo.id}</NavLink>
            ))}
        </div>
        
    </>
  )
}

export default Todos