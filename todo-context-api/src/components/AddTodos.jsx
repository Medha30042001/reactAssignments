import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodos = () => {

    const {addTodo} = useContext(TodoContext);
    const [text, setText] = useState("");

    const addItem = () => {
        if(text.trim() === "") return;
        addTodo(text);
        setText("");
    }

  return (
    <>
        <input type="text" 
            value={text} 
            placeholder="Enter todo"
            onChange={(e) => setText(e.target.value)}/>
        <button onClick={addItem}>Add</button>
    </>
  )
}

export default AddTodos;