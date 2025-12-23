import { useEffect, useState } from "react"
import NavBar from "./NavBar";

const Todos = () => {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                setTodos(data.slice(0, 10));
                setLoading(false);
            }, 2000);
        })
    }, [])

  return (
    <>
    <NavBar />
        {loading? (
            <h1 className="content" style={{fontSize:'100px'}}>Loading...</h1> 
        ):(
            <>
            <h1>This is the Todos Page</h1> 
                <div className="todosContainer">
                    {todos.map(todo => (
                    <div className="todoCard" key={todo.id}>
                        <h4>User number {todo.id}</h4>
                        <h4>Title : {todo.title}</h4>
                        <h4>Status : {todo.completed ? "Completed" : "Not Completed"}</h4>
                    </div>
                    ))}
                </div>
            </>
        )}  
   
    </>
  )
}

export default Todos