import PropTypes from 'prop-types';
import { BooksPropType } from './propTypes';

const Books = ({ books }) => {
  return (
    <div>
      {JSON.stringify(books)}
    </div>
  )
}

export default Books;
