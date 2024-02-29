import React, { useState } from "react";
import ButtonHandler from "./ButtonHandler";
import TodoItem, { Task } from "./TodoItem";

// Renderar listan med uppgifter
const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // Tillstånd för att lagra uppgifter
  const [inputText, setInputText] = useState<string>(""); // Tillstånd för att lagra texten från input-fältet

  // Lägger till en ny uppgift/todo
  const addTask = () => {
    if (inputText.trim() !== "") {
      const newTask: Task = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };
      setTasks([...tasks, newTask]); // Lägger till den nya uppgiften/todo i tasks-arrayen
      setInputText("");
    }
  };

  // Markerar en uppgift som slutförd
  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); // Uppdaterar tasks-arrayen med den uppdaterade todosen
  };

  // Tar bort en uppgift
  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId); // Skapar en ny array med uppgifter som inte matchar taskId
    setTasks(updatedTasks); // Uppdaterar tasks-arrayen med den nya arrayen utan den borttagna uppgiften/todo
  };

  // Uppdaterar texten för en uppgift
  const updateTaskText = (taskId: number, newText: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
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
        {/* Renderar varje uppgift/ todo med TodoItem-komponenten */}
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            onToggleCompletion={() => toggleTaskCompletion(task.id)}
            onUpdateText={(newText: string) => updateTaskText(task.id, newText)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
