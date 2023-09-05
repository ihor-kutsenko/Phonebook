import { useState } from 'react';
import { Formik } from 'formik';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import schema from 'utils/shema';

import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';

import { changeContact } from 'redux/contacts/operations';

import {
  Form,
  FormField,
  FieldFormik,
  ErrorMessage,
  StyledButton,
  LabelWrapper,
  CloseBtn,
} from './ChangeContactModal.styled';
import { customStyles } from './customsStyles';

Modal.setAppElement('#root');

export const ChangeContactModal = ({
  isOpen,
  data,
  onClose,
  setModalIsOpen,
}) => {
  const [formValues, setFormValues] = useState(data || {});

  const initialValues = { name: '', number: '' };
  const savedValues = {
    name: data?.name || '',
    number: data?.number || '',
  };

  const dispatch = useDispatch();

  const closeModal = () => {
    onClose();
    setModalIsOpen(false);
  };

  const onSubmitHandler = (values, { resetForm }) => {
    const newFormValues = { ...formValues, ...values };
    setFormValues(newFormValues);
    dispatch(changeContact(newFormValues));
    resetForm();
    closeModal();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Inline Styles Modal Example"
        style={customStyles}
      >
        <CloseBtn onClick={onClose}>
          <MdOutlineClose size={20} />
        </CloseBtn>
        <Formik
          initialValues={savedValues || initialValues}
          onSubmit={onSubmitHandler}
          enableReinitialize
          validationSchema={schema}
        >
          {formik => {
            return (
              <Form autoComplete="off">
                <FormField>
                  <LabelWrapper>
                    <BsPersonFill />
                    Name
                  </LabelWrapper>
                  <FieldFormik type="text" name="name" placeholder="Name" />
                  <ErrorMessage name="name" component="span" />
                </FormField>
                <FormField>
                  <LabelWrapper>
                    <BsFillTelephoneFill />
                    Phone Number
                  </LabelWrapper>
                  <FieldFormik
                    type="tel"
                    name="number"
                    placeholder="+38-099-111-22-33"
                  />
                  <ErrorMessage name="number" component="span" />
                </FormField>
                <StyledButton
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Save contact
                </StyledButton>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};
