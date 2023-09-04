import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  position: relative;
  text-decoration: none;
  margin-right: 50px;
  font-size: 18px;
  font-weight: 700;
  color: #000;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  &.active {
    text-shadow: rgba(130, 130, 130, 0.5) 4px 2px 3px;
    color: white;
  }

  @media screen and (min-width: 768px) {
    padding: 12px;
  }
`;
