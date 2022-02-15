import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: true },
];

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            };
            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
           return state.filter((todo) => todo.id !== action.payload.id);
        },
        editTodo: (state, action) => {
            state.map(todo => (todo.id === action.payload.id) ? todo.title=action.payload.editText : todo)
            
        }
    },
});

export const { addTodo, toggleComplete, deleteTodo, editTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
