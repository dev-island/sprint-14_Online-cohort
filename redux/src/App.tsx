import { Counter } from "./features/counter/Counter"
import "./App.css"
import TodoList from "./features/Todos/TodoList"
import TodoForm from "./features/TodoForm"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TodoList />
        <TodoForm />
      </header>
    </div>
  )
}

export default App
