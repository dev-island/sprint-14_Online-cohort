import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { selectFormOpen, closeForm } from "./todoFormSlice"
import { addTodo } from "../Todos/todosSlice"

const TodoForm = () => {
  const isOpen = useAppSelector(selectFormOpen)
  const dispatch = useAppDispatch()
  const [input, setInput] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value)

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (input === "") return
    setInput("")
    dispatch(addTodo(input))
    dispatch(closeForm())
  }

  return (
    <Modal isOpen={isOpen} onClose={() => dispatch(closeForm())}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>New Task</FormLabel>
            <Input onChange={handleInputChange} type="text" />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="outline"
            mr={3}
            onClick={() => dispatch(closeForm())}
          >
            Close
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Add Todo
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default TodoForm
