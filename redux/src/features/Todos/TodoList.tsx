import { Button, Checkbox, ListItem, UnorderedList } from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { selectTodos, toggleTodo } from "./todosSlice"
import { openForm } from "../TodoForm/todoFormSlice"

const TodoList = () => {
  const todos = useAppSelector(selectTodos)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>Todos</h1>
      <Button onClick={() => dispatch(openForm())}>Add Todo</Button>
      <UnorderedList>
        {todos.map((todo) => (
          <ListItem key={todo.id} listStyleType="none">
            <Checkbox
              colorScheme="red"
              defaultChecked={todo.status === "complete"}
              onChange={() => dispatch(toggleTodo(todo.id))}
            >
              Checkbox
              {todo.text}
            </Checkbox>
          </ListItem>
        ))}
      </UnorderedList>
    </div>
  )
}

export default TodoList
