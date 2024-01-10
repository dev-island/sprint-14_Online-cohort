import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"

export interface TodoForm {
  isOpen: boolean
}

export const initialState: TodoForm = {
  isOpen: false,
}

export const todoFormSlice = createSlice({
  name: "todoForm",
  initialState,
  reducers: {
    openForm(state) {
      state.isOpen = true
    },
    closeForm(state) {
      state.isOpen = false
    },
  },
})

export const { openForm, closeForm } = todoFormSlice.actions

export const selectFormOpen = (state: RootState) => state.todoForm.isOpen

export default todoFormSlice.reducer
