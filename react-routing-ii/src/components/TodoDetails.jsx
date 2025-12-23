import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const TodoDetails = () => {

    const {todoId} = useParams();
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(response => response.json())
        .then(data => setDetails(data));
    }, []);

  return (
    <>
    <div className="content">
        <div className="todo">
            <h3>Todo Id : {details.id}</h3>
            <h3>Title : {details.title}</h3>
            <h3>Completion Status : {details.completed 
                ? "Completed" : "Not Completed"}</h3>
        </div>
    </div> 
    </>
  )
}

export default TodoDetails