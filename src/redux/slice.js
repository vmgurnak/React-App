import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo(state, { payload }) {
      state.items.push(payload);
    },
    removeTodo(state, { payload }) {
      const deleteIndex = state.items.findIndex(item => item.id === payload);
      if (deleteIndex === -1) return;
      state.items.splice(deleteIndex, 1);
      // state.items = state.items.filter(item => item.id !== payload);
    },
    editTodo(state, { payload }) {
      const editIndex = state.items.findIndex(item => item.id === payload.id);
      if (editIndex === -1) return;
      state.items[editIndex].text = payload.text;
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;

export const selectTodos = state => state.todos.items;
