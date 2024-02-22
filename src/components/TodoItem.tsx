import React, { useState } from "react";

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

// Definiera typen för onDelete
type DeleteHandler = () => void;

// Definiera typen för props för TodoItem-komponenten
interface TodoItemProps {
  task: Task;
  onDelete: DeleteHandler;
  onToggleCompletion: () => void;
}

// TodoItem-komponenten som visar en enskild uppgift
// FC - React Hook, hanterar lokalt tillstånd. useState-hook används för att hantera två olika tillstånd: editing, som indikerar om uppgiften är i redigeringsläge eller inte, och inputText, som håller värdet av uppgiftens text när den redigeras.
const TodoItem: React.FC<TodoItemProps> = ({
  task,
  onDelete,
  onToggleCompletion,
}) => {
  // State för att hålla redigeringsläget för uppgiften och dess text
  const [editing, setEditing] = useState(false);
  const [inputText, setInputText] = useState(task.text);

  // Funktion för att hantera redigeringsläget
  // sätter tillståndet editing till true
  const handleEdit = () => {
    setEditing(true);
    setInputText(task.text);
  };

  // Funktion för att spara ändringar efter redigering
  // sätter tillståndet editing till false och sparar ändringarna
  const handleSave = () => {
    setEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 mb-4 rounded">
      <div>
        <input
          type="checkbox"
          className="mr-2 h-5 w-5"
          checked={task.completed}
          onChange={onToggleCompletion}
        />
        {editing ? (
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className=" p-2 rounded ml-6 w-70"
          />
        ) : (
          <span className={`text-lg ${task.completed ? "line-through" : ""}`}>
            {task.text}
          </span>
        )}
      </div>
      <div>
        {editing ? (
          // Save knappen
          <button
            className="ml-3 px-4 py-2 rounded text-white bg-lime-700 hover:bg-green-900"
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <>
            {/* Edit knappen */}
            <button
              className="ml-3 px-4 py-2 rounded text-white bg-gray-700 hover:bg-gray-800"
              onClick={handleEdit}
            >
              Edit
            </button>
            {/* Delete knappen */}
            <button
              className="ml-3 px-4 py-2 rounded text-white bg-red-800 hover:bg-red-950"
              onClick={onDelete}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
