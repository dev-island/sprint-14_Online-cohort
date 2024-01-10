import { FC, useState, useEffect } from "react";

type Props = {
  getItems: () => number[];
};

const List: FC<Props> = ({ getItems }) => {
  /* Initial state of the items */
  const [items, setItems] = useState<number[]>([]);

  /* This hook sets the value of items if 
       getItems object changes */
  useEffect(() => {
    console.log("Fetching items");
    setItems(getItems());
  }, [getItems]);

  /* Maps the items to a list */
  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default List;
