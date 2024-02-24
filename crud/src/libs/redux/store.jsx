import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";

const store = configureStore({
  reducer: {
    todoStore: TodoSlice,
  },
});

export default store;
