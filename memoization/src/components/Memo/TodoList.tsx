import { FC, memo } from "react";
import TodoItem from "./TodoItem";
import { Todo } from ".";

type Props = {
  list: Todo[];
};

const TodoList: FC<Props> = ({ list }) => {
  console.log("Todo List component rendered");
  return (
    <ul>
      {list.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const MemoTodoList = memo(TodoList);
export default MemoTodoList;
