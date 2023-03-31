import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ListItem from "../ListItem/ListItem";

import { useSelector, useDispatch } from "react-redux";
import { rearrange, setList } from "../../redux/toDoList/toDoListSlice";
import { useEffect } from "react";
import axios from "axios";

const ToDoList = () => {
  const toDoList = useSelector((state) => state.toDoList.list);
  const dispatch = useDispatch();
  const onDragEnd = ({ source, destination }) => {
    if (!destination) return;
    const startIndex = source.index;
    const endIndex = destination.index;
    dispatch(rearrange({ startIndex, endIndex }));
  };
  useEffect(() => {
    axios.get("http://localhost:3000/get").then((response) => {
      dispatch(setList(response.data));
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    axios.post("http://localhost:3000/add-todos", toDoList);
  }, [toDoList]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="toDoList">
        {(provided) => (
          <ul
            className="bg-white p-4 rounded-lg shadow-md"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {toDoList.map((item, index) => (
              <ListItem key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ToDoList;
