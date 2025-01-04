import React from "react";
import "./TodoItem.css";
import { Task } from "./TaskObj";

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
}

export const TodoItem = ({ task, deleteTask, toggleCompleted }: Props) => {
  function handleChange() {
    toggleCompleted(task.id);
  }
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleChange}
      ></input>
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
};
