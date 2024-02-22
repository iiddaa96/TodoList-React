import React, { useState } from "react";

//Beskriver strukturen för objekten i tasks-arrayen
export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

// Definiera typen för onDelete
type DeleteHandler = () => void;

interface TodoItemProps {
  task: Task;
  onDelete: DeleteHandler;
  onToggleCompletion: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  onDelete,
  onToggleCompletion,
}) => {
  const [editing, setEditing] = useState(false);
  const [inputText, setInputText] = useState(task.text);

  const handleEdit = () => {
    setEditing(true);
    setInputText(task.text);
  };

  const handleSave = () => {
    setEditing(false);
    // Sparar ändringar här (t.ex. via en callback)
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
          <button
            className="ml-3 px-4 py-2 rounded text-white bg-lime-700 hover:bg-green-900"
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <>
            <button
              className="ml-3 px-4 py-2 rounded text-white bg-gray-700 hover:bg-gray-800"
              onClick={handleEdit}
            >
              Edit
            </button>
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
