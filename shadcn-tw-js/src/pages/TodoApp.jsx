import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")

  const addTodo = () => {
    if (!text.trim()) return
    setTodos([...todos, { id: Date.now(), text, done: false }])
    setText("")
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Todo List</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="New todo"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={addTodo}>Add</Button>
          </div>

          <div className="space-y-2">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center gap-2"
              >
                <Checkbox
                  checked={todo.done}
                  onCheckedChange={() => toggleTodo(todo.id)}
                />
                <span
                  className={todo.done ? "line-through text-muted-foreground" : ""}
                >
                  {todo.text}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
