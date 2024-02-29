import React, { useState } from "react";
import ButtonHandler, { DeleteHandler } from "./ButtonHandler";

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

// interface för att ta bort en uppgift, har hand om en enskild uppgift och funktion för att markera uppgiften som klar
interface TodoItemProps {
  task: Task;
  onDelete: DeleteHandler;
  onToggleCompletion: () => void;
  onUpdateText: (newText: string) => void;
}

// Enskild uppgift i listan
// FC - Funktion komponent, en funktionell komponent i React som tar emot props och returnerar JSX
const TodoItem: React.FC<TodoItemProps> = ({
  task,
  onDelete,
  onToggleCompletion,
  onUpdateText,
}) => {
  // Lokalt tillstånd för redigeringsläge och textinput
  const [editing, setEditing] = useState(false);
  const [inputText, setInputText] = useState(task.text);

  // Hanterar redigeringsläget
  const handleEdit = () => {
    setEditing(true);
    setInputText(task.text);
  };

  // Sparar ändringar efter redigering
  const handleSave = () => {
    setEditing(false);
    if (inputText.trim() !== "") {
      onUpdateText(inputText); // Anropa onUpdateText med den nya texten
    }
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
            className="p-2 rounded ml-6 w-70"
          />
        ) : (
          <span className={`text-lg ${task.completed ? "line-through" : ""}`}>
            {task.text}
          </span>
        )}
      </div>
      {/* ----------Ärver knapp från ButtonHandler men lägger till CSS -------------*/}
      <div>
        {editing ? (
          <ButtonHandler
            onClick={handleSave}
            className="text-white bg-lime-700 hover:bg-green-900 ml-3"
          >
            Save
          </ButtonHandler>
        ) : (
          <>
            <ButtonHandler
              onClick={handleEdit}
              className="text-white bg-gray-700 hover:bg-gray-800 ml-3"
            >
              Edit
            </ButtonHandler>
            <ButtonHandler
              onClick={onDelete}
              className="text-white bg-red-800 hover:bg-red-950 ml-3"
            >
              Delete
            </ButtonHandler>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
