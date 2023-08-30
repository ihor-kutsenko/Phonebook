import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 12px;
  max-width: 375px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 375px;

  gap: 8px;
`;

export const Name = styled.span`
  color: var(--secondary-color);
`;

export const Number = styled.span`
  color: #fff;
`;

export const Button = styled.button`
  padding: 5px 7px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: var(--button-background-color);
  color: #000;
  cursor: pointer;
  transition: background-color 250ms linear, color 250ms linear;

  &:hover,
  &:focus {
    background-color: var(--accent-color);
    color: #fff;
  }
`;
