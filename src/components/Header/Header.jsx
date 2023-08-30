import PropTypes from 'prop-types';
import { HeaderTitle } from './Header.styled';

const Header = ({ title }) => {
  return <HeaderTitle>{title}</HeaderTitle>;
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
