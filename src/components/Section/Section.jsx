import PropTypes from 'prop-types';
import { MainSection, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <MainSection>
      <Title title={title}>{title}</Title>
      {children}
    </MainSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Section;
