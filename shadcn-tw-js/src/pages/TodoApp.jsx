import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import React, { useState } from 'react'

const TodoApp = () => {

    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const handleAdd = () => {
        if(!text.trim()) return;
        setTodos([...todos, {id:Date.now(), text, done:false}]);
        setText('');
    }

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo));
    }

  return (
    <>  
        <div className='max-w-md mx-auto mt-10 space-y-4'>
            <Card>
                <CardHeader>
                    <CardTitle>Todo List</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4 px-6'>
                    <div className='flex gap-2'>
                        <Input type='text'
                        placeholder='Enter Todo'
                        value={text}
                        onChange={(e) => setText(e.target.value)} />

                        <Button onClick={handleAdd}>Add</Button>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className='max-w-md mx-auto mt-10 space-y-2'>
            {todos.map(todo => (
                <div key={todo.id} className='flex items-center gap-2'>
                    <Checkbox checked={todo.done}
                    onCheckedChange={() => toggleTodo(todo.id)} />
                    <span className={todo.done ? 'line-through text-muted-foreground' : ''}>{todo.text}</span>
                </div>
            ))}
        </div>
    </>
  )
}

export default TodoApp