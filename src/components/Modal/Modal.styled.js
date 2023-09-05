import styled from 'styled-components';

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

export const ModalPicture = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 0;
  object-fit: cover;
  object-position: center;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  width: 100%;
  height: auto;
`;
export const InfoWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
  width: 100%;
  height: auto;
  color: var(--secondary-color);
`;

export const Info = styled.p`
  height: auto;
  color: white;
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;

  gap: 6px;
  padding: 8px 14px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
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

export const PhotoWrap = styled.div`
  margin: 0 auto;
  padding: 10px;
  max-width: 100%;
  width: 320px;
  height: 220px;
  border-radius: 50%;
`;

export const BorderOutside = styled.div`
  padding: 7px;
  margin: 0 auto;
  width: 170px;
  border-radius: 50%;
  border: none;
  margin-bottom: 10px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;

  &:hover,
  &:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }

  @media screen and(min-width:768px) {
    margin-bottom: 15px;
  }
`;
export const BorderInside = styled.div`
  padding: 7px;
  border: none;
  border-radius: 50%;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;

  &:hover,
  &:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
`;
export const PhotoThumb = styled.div`
  margin-bottom: 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`;
