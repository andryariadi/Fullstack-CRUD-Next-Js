import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    getAllTodos: (state, action) => {
      console.log({ state, action }, "<-----ditodoslice");
      state.todos = action.payload.map((todo) => {
        return {
          _id: todo._id,
          title: todo.title,
          status: todo.status,
          categories: todo.categories,
        };
      });
    },
  },
});

export default todoSlice.reducer;
export const { getAllTodos } = todoSlice.actions;
