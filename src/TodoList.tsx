import React, { useState } from "react";

// Definiera en typ för en uppgift
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  // State för att hålla listan med uppgifter
  const [tasks, setTasks] = useState<Task[]>([]);

  // State för att hålla texten i input fältet
  const [inputText, setInputText] = useState<string>("");

  // Funktion för att lägga till en ny uppgift
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

  // Funktion för att markera en uppgift som slutförd
  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Funktion för att ta bort en uppgift
  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="text-center mx-auto max-w-md">
      <h2 className="text-center mb-4 text-lg md:mt-8 underline">
        Add a todo here:
      </h2>
      <input
        type="text"
        className=" border-gray-400 p-2 rounded "
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button
        onClick={addTask}
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 mb-4 ml-3"
      >
        Add
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              className="mr-2 h-5 w-5"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              className="text-lg"
            >
              {task.text}
            </span>
            <button
              className="ml-3 px-4 py-2 rounded text-white bg-red-800"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
