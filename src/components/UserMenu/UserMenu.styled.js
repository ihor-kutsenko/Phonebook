import styled from 'styled-components';
import Button from '@mui/material/Button';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  font-weight: 700;
  color: royalblue;
`;

export const Btn = styled(Button)`
  cursor: pointer;
  transition: box-shadow 250ms linear, scale 2500ms linear;
  &:hover {
    box-shadow: -1px -1px 15px #8ba793, 15px 15px 35px #fff;
    scale: 1.05;
  }
`;
