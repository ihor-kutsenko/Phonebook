import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  padding: 5px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px;

  color: var(--secondary-color);
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
`;

export const FormikInput = styled(Field)`
  padding: 6px 8px;
  border: 0;
  outline: 0;
  border-radius: 8px;
  background-color: var(--secondary-background-color);
  font-size: 14px;
`;

export const FormikErrorMessage = styled(ErrorMessage)`
  max-width: 375px;
  padding-left: 10px;
  padding-right: 10px;
  font-style: italic;
  color: var(--error-message-color);
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  gap: 6px;
  padding: 8px 14px;
  margin-top: 10px;
  max-width: 100%;
  font-size: 18px;

  border: none;
  outline: none;
  border-radius: 8px;
  background-color: var(--button-background-color);
  color: #fff;
  cursor: pointer;
  transition: background-color 250ms linear, color 250ms linear;

  &:hover,
  &:focus {
    background-color: var(--accent-color);
    color: #000;
  }
`;
