import PropTypes from 'prop-types';
import { Container } from './MainContainer.styled';

const MainContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

MainContainer.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MainContainer;
