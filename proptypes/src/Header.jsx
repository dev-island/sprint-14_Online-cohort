import PropTypes from "prop-types";
import { BooksPropType } from "./propTypes";

const Header = ({ title, books }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
  books: BooksPropType,
}