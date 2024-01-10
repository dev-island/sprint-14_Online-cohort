import { FC, memo } from "react";
import { Todo } from ".";

type Props = {
  item: Todo;
};

const TodoItem: FC<Props> = ({ item }) => {
  console.log("TodoItem component rendered");
  return <li>{item.title}</li>;
};

const MemoTodoItem = memo(TodoItem);
export default MemoTodoItem;
