import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import notifyOptions from 'NotifyOptions/NotifyOptions';
import 'react-toastify/dist/ReactToastify.css';

import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import { IoMdPersonAdd } from 'react-icons/io';

import schema from 'utils/shema';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';

import {
  FormikForm,
  Label,
  LabelWrapper,
  FormikInput,
  FormikErrorMessage,
  Button,
} from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onAddContact = newContact => {
    const includesContact = contacts.filter(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    ).length;

    if (includesContact) {
      return toast.error(
        `${newContact.name}: is already in contacts`,
        notifyOptions
      );
    } else {
      dispatch(addContact(newContact));
    }
    toast.success(
      `${newContact.name} was successfully added to your contacts`,
      notifyOptions
    );
  };

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ ...values });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormikForm autoComplete="off">
        <Label htmlFor="name">
          <LabelWrapper>
            <BsPersonFill />
            Name
          </LabelWrapper>

          <FormikInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormikErrorMessage name="name" component="span" />
        </Label>
        <Label htmlFor="number">
          <LabelWrapper>
            <BsFillTelephoneFill />
            Number
          </LabelWrapper>
          <FormikInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="+38-099-111-22-33"
          />
          <FormikErrorMessage name="number" component="span" />
        </Label>

        <Button type="submit">
          <IoMdPersonAdd size="18" />
          Add contact
        </Button>
      </FormikForm>
    </Formik>
  );
};

export default ContactForm;
