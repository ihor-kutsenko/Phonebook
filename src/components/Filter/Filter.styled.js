import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--secondary-color);
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 8px;
`;

export const Input = styled.input`
  padding: 6px 8px;
  width: 220px;
  border: 0;
  outline: 0;
  border-radius: 8px;

  background-color: var(--secondary-background-color);
  font-size: 14px;
`;
