import { configureStore, combineReducers } from "@reduxjs/toolkit";
import toDoListReducer from "./toDoList/toDoListSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  toDoList: toDoListReducer,
});

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
});

// export const persistor = persistStore(store);
