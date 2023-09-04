import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import MainContainer from 'components/MainContainer/MainContainer';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import Header from 'components/Header/Header';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import ContactList from 'components/ContactList/ContactList';

import { TotalContacts } from 'components/ContactList/ContactList.styled';
// selectors
import { selectError, selectIsLoading, selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainContainer>
      <Section title="Phonebook">
        <ContactForm />
        <Header title="Contacts" />
        <TotalContacts>Total contacts: {contacts.length}</TotalContacts>
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactList />
      </Section>
      <ToastContainer />
    </MainContainer>
  );
};

export default Contacts;
