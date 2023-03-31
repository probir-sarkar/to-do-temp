import React, { useState } from "react";
import ToDoList from "./components/ToDoList/ToDoList";
import Modal from "./components/Modal/Modal";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <div className="max-w-4xl w-full p-4">
        <h1 className="text-3xl font-bold text-center mb-4">My To-Do List</h1>
        <div className="flex mb-4">
          <div className="w-full flex justify-end">
            {/* right to button */}

            <button
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleOpenModal}
            >
              <FontAwesomeIcon icon={faPlus} size="xl" />
            </button>
            <Modal isOpen={isOpen} onClose={handleCloseModal} />
          </div>
          <Modal isOpen={isOpen} onClose={handleCloseModal} />
          <p className="text-gray-800 flex-1"></p>
        </div>
        <ToDoList />
      </div>
    </div>
  );
};

export default App;
