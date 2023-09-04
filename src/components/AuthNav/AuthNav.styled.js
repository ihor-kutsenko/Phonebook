import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #000;
  font-weight: 700;

  &.active {
    color: white;
  }
`;
