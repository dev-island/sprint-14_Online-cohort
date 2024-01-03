import { useEffect, useState } from "react";
import Pets from "./Pets";
import "./App.css";
import dayjs from 'dayjs';

export type Pet = {
  name: string;
  color: string;
  age: number;
};

const defaultData: Pet[] = [
  {
    name: "Koa",
    color: "brown",
    age: 1,
  },
];

function App() {
  const [pets, setPets] = useState<undefined | Pet[]>();
  const day = 29
  const month = 0
  const year = 1992

  function getPets(log: string, secondLog: string): void {
    console.log(log, secondLog);
    setPets(defaultData);
  }

  const calculateAge = (): number => {
    const date = dayjs().year(year).month(month).date(day)
    const currentDate = dayjs();
    const age = currentDate.diff(date, 'year')
    return age;
  }

  const handleClick = (e: any) => {
    console.log("clicked", e);
  };

  const age = calculateAge();
  console.log(age);

  useEffect(() => {
    const timeout = setTimeout(() => getPets('hello', 'world'), 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div>
        <Pets pets={pets} getPets={getPets} />
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  );
}

export default App;


// // implicit type
// const myString = 'hello world';
// // coercing
// const myNumber = 5 as number | string;
// // explicit type
// const myBoolean: boolean = false;

// // Basic Types
// // string
// const myName: string = 'John Doe';
// // number
// const myAge: number = 30;
// // boolean
// const hasHobbies: boolean = true;
// // array
// const hobbies: string[] = ['cooking', 'sports'];

// // tuples
// const address: [string, number] = ['street', 99];

// // enums
// enum Color {
//   Gray, // 0
//   Green = 100, // 100
//   Blue = 2, // 2
// }

// // type alias
// type MyAlias = string | number;

// // interface
// interface MyInterface {
//   name: string;
//   age: number;
// }

// // functions
// function returnMyName(): string {
//   return myName;
// }

// // void
// function sayHello(): void {
//   console.log('Hello!');
// }