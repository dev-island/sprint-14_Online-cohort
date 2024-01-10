import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"

export type Status = "incomplete" | "complete"

export interface Todo {
  id: number
  text: string
  status: Status
}

export interface TodosState {
  items: Todo[]
}

const initialState: TodosState = {
  items: [],
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        status: "incomplete",
      })
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload)
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: number; text: string }>,
    ) => {
      const { id, text } = action.payload
      state.items.map((todo) => {
        if (todo.id === id) {
          todo.text = text
        }
      })
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.items.map((todo) => {
        if (todo.id === action.payload) {
          todo.status = todo.status === "complete" ? "incomplete" : "complete"
        }
      })
    },
  },
})

export const { addTodo, removeTodo, updateTodo, toggleTodo } =
  todosSlice.actions

export const selectTodos = (state: RootState) => state.todos.items

export default todosSlice.reducer
