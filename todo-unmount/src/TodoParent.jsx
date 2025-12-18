import { useState } from "react";
import TodoList from "./TodoList";

function TodoParent() {
    const [showTodos, setShowTodos] = useState(true);

  return (
    <>
        <button
            onClick={() => setShowTodos(false)}
        >Unmount Todos</button>

        {showTodos && <TodoList />}
    </>
  );
}

export default TodoParent;