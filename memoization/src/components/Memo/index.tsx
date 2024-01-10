import { useState } from "react";
import Todo from "./TodoList";

export type Todo = {
  id: number;
  title: string;
};

const App = () => {
  console.log("App component rendered");

  const [text, setText] = useState("");
  const [todo, setTodo] = useState<Todo[]>([
    { id: 1, title: "Read Book" },
    { id: 2, title: "Fix Bug" },
  ]);

  const addTodo = () => {
    const newTodo = { id: Date.now(), title: text };
    setTodo([...todo, newTodo]);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="button" onClick={addTodo}>
        Add todo
      </button>
      <Todo list={todo} />
    </div>
  );
};

export default App;
