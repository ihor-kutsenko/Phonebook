import styled from 'styled-components';

export const TotalContacts = styled.p`
  margin-bottom: 10px;
  color: white;
`;

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

export const ModalPictureWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  width: 60px;

  border-radius: 50%;
  box-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background: #ecf0f3;
    box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }

  @media screen and (min-width: 480px) {
    height: 40px;
    width: 40px;
  }
`;
