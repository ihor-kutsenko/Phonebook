import styled from 'styled-components';
import { Form as FormikForm, Field, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;
  margin-bottom: 12px;
  padding: 5px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 300px;
  height: auto;
  color: var(--secondary-color);
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
`;

export const FieldFormik = styled(Field)`
  padding: 6px 8px;
  border: 0;
  outline: 0;
  border-radius: 8px;
  background-color: var(--secondary-background-color);
  font-size: 14px;
`;

export const ErrorMessage = styled(FormikError)`
  max-width: 375px;
  padding-left: 10px;
  padding-right: 10px;
  font-style: italic;
  color: var(--error-message-color);
`;

export const StyledButton = styled.button`
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

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 5px;

  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 50%;
  color: var(--secondary-color);
  background-color: transparent;

  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--secondary-background-color);

    svg {
      fill: var(--accent-color);
      stroke: var(--accent-color);
    }
  }
`;
