import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  display: inline-block;
  text-decoration: none;
  padding: 9px 10px;
  border-radius: 20px;
  border: none;
  font-weight: 700;
  color: #f1ede1;
  background-color: burlywood;
  transition-property: background-color, fill;
  transition-duration: 250ms;
  cursor: pointer;
  &:hover {
    background-color: #2196f3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
