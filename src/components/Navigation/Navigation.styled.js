import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 3px;
  font-weight: 700;
  color: #fff;
  border: none;

  &.active {
    color: yellow;
  }

  @media screen and (min-width: 768px) {
    padding: 12px;
  }
`;
