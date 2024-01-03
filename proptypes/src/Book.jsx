import { BookType } from './propTypes';

const Book = ({ id, title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

Book.propTypes = BookType;