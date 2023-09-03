import NotFound from '../../img/not-found2.png';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  font-size: 42px;
  color: white;
`;

const PageNotFound = () => {
  return (
    <>
      <Title>Page not Found</Title>
      <img src={NotFound} alt="page not found" />
    </>
  );
};

export default PageNotFound;
