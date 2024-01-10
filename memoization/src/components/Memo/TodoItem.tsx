import { FC } from "react";
import { Todo } from ".";

type Props = {
  item: Todo;
};

const TodoItem: FC<Props> = ({ item }) => {
  console.log("TodoItem component rendered");
  return <li>{item.title}</li>;
};

export default TodoItem;
