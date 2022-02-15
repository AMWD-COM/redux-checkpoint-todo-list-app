import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoSlice";


export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})

//after configStroe , go to connect it w/ "App" in index.js & add store as " "

