import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteItem } from "../../redux/toDoList/toDoListSlice";

const ListItem = ({ item, index }) => {
  const dispatch = useDispatch();
  const { isCompleted, id } = item;

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="flex items-center py-2 px-4 bg-white border-b border-gray-200"
          ref={provided.innerRef}
        >
          <button>
            <FontAwesomeIcon
              icon={isCompleted ? faCheckSquare : faSquare}
              className="mr-4 text-gray-400"
              onClick={() => dispatch(toggleComplete(id))}
            />
          </button>
          <p className={`flex-1 text-gray-800 ${item.isCompleted && "line-through"}`}>
            {item.content}
          </p>
          <button className="ml-4 text-red-600 hover:text-red-800">
            <FontAwesomeIcon icon={faTrash} onClick={() => dispatch(deleteItem(id))} />
          </button>
        </li>
      )}
    </Draggable>
  );
};

export default ListItem;
