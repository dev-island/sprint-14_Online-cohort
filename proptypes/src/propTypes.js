import PropTypes from 'prop-types'

export const BookType = {
  id: PropTypes.string,
  title: PropTypes.string,
};

export const BooksPropType = PropTypes.arrayOf(
  PropTypes.shape(BookType)
);
