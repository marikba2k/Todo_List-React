import { useState } from "react";
import "./TodoContainer.css";
import { TodoItem } from "./TodoItem";
import { Task } from "./TaskObj";

export const TodoContainer = () => {
  //This container should manage the state of the input field and the list of tasks.

  //Manging the state of task list
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      text: "Doctor Appointment",
      completed: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      completed: false,
    },
  ]);

  //managing the state of task text
  const [text, setText] = useState("");

  function addTask(text: string) {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCompleted(id: number) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
      <input
        placeholder="Enter your task here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addTask(text)}>Add</button>
    </div>
  );
};
