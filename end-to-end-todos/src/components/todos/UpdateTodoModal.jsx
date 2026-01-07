import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useTodo } from "@/context/TodoContext";

const UpdateTodoModal = ({ open, onOpenChange }) => {
  const { selectedTodo, updateTodo } = useTodo();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.title);
    }
  }, [selectedTodo]);                                    

  if (!selectedTodo) return null;

  const handleSave = async () => {
  await updateTodo(selectedTodo.id, { title });
  onOpenChange(false);
};


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>

        <Input value={title} onChange={(e) => setTitle(e.target.value)} />

        <Button onClick={handleSave}>Save</Button>
      </DialogContent>
    </Dialog>
  );
};


export default UpdateTodoModal;
