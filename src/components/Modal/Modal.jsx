import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../redux/toDoList/toDoListSlice";
import { nanoid } from "nanoid";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const dispatch = useDispatch();
  const [newToDo, setNewToDo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newToDo) return;
    const newToDoItem = {
      id: nanoid(),
      content: newToDo,
      isCompleted: false,
    };
    dispatch(addToDo(newToDoItem));
    setNewToDo("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 opacity-75 z-40"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-2xl font-bold mb-4">Add To-Do Item</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="to-do">
                To-Do:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="to-do"
                type="text"
                placeholder="Enter a new to-do item"
                value={newToDo}
                onChange={(event) => setNewToDo(event.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded mr-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
