import React, { useState } from "react";

const NewToDoOverlay = ({ onClose, onAdd }) => {
  const [newToDo, setNewToDo] = useState("");

  const handleAddToDo = () => {
    if (newToDo) {
      onAdd(newToDo);
      onClose();
    }
  };

  const handleNewToDoChange = (event) => {
    setNewToDo(event.target.value);
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
        <h2 className="text-lg font-bold mb-2">Add New To-Do Item</h2>
        <input
          type="text"
          className="w-full border-gray-300 rounded-lg px-4 py-2 mb-2"
          placeholder="Enter new to-do item..."
          value={newToDo}
          onChange={handleNewToDoChange}
        />
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mr-2"
            onClick={handleAddToDo}
          >
            Add To-Do
          </button>
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewToDoOverlay;
