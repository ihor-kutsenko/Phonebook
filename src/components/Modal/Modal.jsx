import Modal from 'react-modal';
import { useState } from 'react';

import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import { TfiPencil } from 'react-icons/tfi';

import { ChangeContactModal } from 'components/ChangeContactModal/ChangeContactModal';

import Av from 'img/avatar.png';

import {
  BorderInside,
  BorderOutside,
  EditButton,
  CloseBtn,
  ModalPicture,
  PhotoThumb,
  PhotoWrap,
  ContactInfo,
  InfoWrapper,
  Info,
} from './Modal.styled';
import { customStyles } from './modalStyles';

Modal.setAppElement('#root');

export const ContactModal = ({ isOpen, data, onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openChangeModal = () => {
    setModalIsOpen(true);
  };

  const closeChangeModal = () => {
    setModalIsOpen(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Inline Styles Modal Example"
      style={customStyles}
    >
      <CloseBtn onClick={onClose}>
        <MdOutlineClose size={20} />
      </CloseBtn>
      <PhotoWrap>
        <BorderOutside>
          <BorderInside>
            <PhotoThumb>
              <ModalPicture src={Av} alt="photo" width="260" />
            </PhotoThumb>
          </BorderInside>
        </BorderOutside>
      </PhotoWrap>
      <ContactInfo>
        <InfoWrapper>
          <BsPersonFill />
          Name: <Info> {data?.name}</Info>
        </InfoWrapper>

        <InfoWrapper>
          <BsFillTelephoneFill />
          Phone Number: <Info> {data?.number}</Info>
        </InfoWrapper>
      </ContactInfo>

      <EditButton onClick={openChangeModal}>
        <TfiPencil size="16" />
        Edit contact
      </EditButton>

      <ChangeContactModal
        isOpen={modalIsOpen}
        onClose={closeChangeModal}
        data={data}
        setModalIsOpen={setModalIsOpen}
      />
    </Modal>
  );
};
