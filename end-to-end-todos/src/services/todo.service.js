import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export const todoService = {
  getTodos(userId) {
    return getDocs(collection(db, "users", userId, "todos"));
  },

  addTodo(userId, todo) {
    return addDoc(collection(db, "users", userId, "todos"), todo);
  },

  updateTodo(userId, todoId, data) {
    return updateDoc(doc(db, "users", userId, "todos", todoId), data);
  },

  deleteTodo(userId, todoId) {
    return deleteDoc(doc(db, "users", userId, "todos", todoId));
  },
};
