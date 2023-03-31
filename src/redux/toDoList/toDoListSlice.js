import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,

  reducers: {
    addToDo: (state, action) => {
      state.list.push(action.payload);
    },
    rearrange: ({ list }, { payload }) => {
      const { startIndex, endIndex } = payload;
      const [removed] = list.splice(startIndex, 1);
      list.splice(endIndex, 0, removed);
    },
    toggleComplete: ({ list }, { payload }) => {
      const index = list.findIndex((item) => item.id === payload);
      list[index].isCompleted = !list[index].isCompleted;
    },
    deleteItem: ({ list }, { payload }) => {
      const index = list.findIndex((item) => item.id === payload);
      list.splice(index, 1);
    },
    setList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addToDo, remove, setList, rearrange, toggleComplete, deleteItem } =
  listSlice.actions;

export default listSlice.reducer;
