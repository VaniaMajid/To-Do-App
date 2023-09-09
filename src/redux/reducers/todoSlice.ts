import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Todo = {
  id: string;
  data: string;
  completed: boolean;
}

type TodoState = {
  todoList: Todo[];
  editingId: string | null;
  editingData: string | null;
}

const initialState: TodoState = {
  todoList: [],
  editingId: null,
  editingData: null,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo (state, action: PayloadAction<string>) {
      state.todoList.push({
        id: new Date().getTime().toString(),
        data: action.payload,
        completed: false,
      });
    },

    deleteTodo (state, action: PayloadAction<string>) {
      state.todoList = state.todoList.filter((item) => item.id !== action.payload);
    },

    toggleTodoCompletion (state, action: PayloadAction<string>) {
      state.todoList = state.todoList.map((item) =>
        item.id === action.payload ? { ...item, completed: !item.completed } : item
      );
    },

    setEditTodo (state, action: PayloadAction<{ id: string; data: string }>) {
      state.editingId = action.payload.id;
      state.editingData = action.payload.data;
    },

    editTodo (state, action: PayloadAction<{ id: string; newData: string }>) {
      state.todoList = state.todoList.map((item) =>
        item.id === action.payload.id ? { ...item, data: action.payload.newData } : item
      );
    },

    deleteAllTodos (state) {
      state.todoList = [];
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleTodoCompletion,
  setEditTodo,
  editTodo,
  deleteAllTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
