import PropTypes from 'prop-types';
import css from './MainContainer.module.css';

const MainContainer = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

MainContainer.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MainContainer;
