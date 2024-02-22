import React, { useState } from "react";
import ButtonHandler from "./ButtonHandler";
import TodoItem, { Task } from "./TodoItem";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const addTask = () => {
    if (inputText.trim() !== "") {
      const newTask: Task = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputText("");
    }
  };

  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2
        style={{ fontFamily: "Lobster, cursive", fontSize: 25 }}
        className="text-center text-black font-semibold mb-4 underline"
      >
        Add a todo here:
      </h2>
      <div className="flex">
        <input
          type="text"
          className="border-gray-400 p-2 rounded ml-6 w-70"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <ButtonHandler
          onClick={addTask}
          className="text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 ml-3"
        >
          Add
        </ButtonHandler>
      </div>

      <div className="w-full max-w-md mt-4 overflow-y-auto">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            onToggleCompletion={() => toggleTaskCompletion(task.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
