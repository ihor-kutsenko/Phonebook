import PropTypes from 'prop-types';
import css from './Header.module.css';

const Header = ({ title }) => {
  return <h2 className={css.header}>{title}</h2>;
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
