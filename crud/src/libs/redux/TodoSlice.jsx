import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    getAllTodos: (state, action) => {
      console.log({ state, action }, "<-----ditodoslice1");
      state.todos = action.payload.map((todo) => {
        return {
          _id: todo._id,
          title: todo.title,
          status: todo.status,
          categories: todo.categories,
        };
      });
    },
    addTodo: (state, action) => {
      // console.log({ state, action }, "<-----ditodoslice2");
      state.todos.push(action.payload);
    },
    deletingTodo: (state, action) => {
      console.log({ state, action }, "<-----ditodoslice3");
      state.todos = state.todos.filter((todo) => todo._id !== action.payload._id);
    },
  },
});

export default todoSlice.reducer;
export const { getAllTodos, addTodo, deletingTodo } = todoSlice.actions;
