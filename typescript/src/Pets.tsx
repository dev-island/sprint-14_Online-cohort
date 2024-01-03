import { FC } from 'react';
import { Pet } from './App'

type Props = {
  pets?: Pet[];
  getPets: (log: string, secondLog: string) => void;
}

type AnimalType = 'dog' | 'cat' | 'bird';

type Animal<T> = {
  name: string;
  color: string;
  age: number;
  animalType: T;
}

const koa: Animal<AnimalType> = {
  name: 'Koa',
  color: 'brown',
  age: 1,
  // animalType: 'fish' as AnimalType // DON"T DO THIS
  animalType: 'dog'
}

console.log(koa)

const Pets: FC<Props> = ({ pets }) => {

  return (
    <div>{
      pets?.map(pet => (
        <p>
          {pet.name}
        </p>
      ))
    }</div>
  )
}

export default Pets;
