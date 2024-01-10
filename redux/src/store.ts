import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "./features/counter/counterSlice"
import todosReducer from "./features/Todos/todosSlice"
import todoFormReducer from "./features/TodoForm/todoFormSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    todoForm: todoFormReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
