import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import MainContainer from './MainContainer/MainContainer';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Header from './Header/Header';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';

import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import './App.module.css';

export default function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainContainer>
      <Section title="Phonebook">
        <ContactForm />
        <Header title="Contacts" />
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactList />
      </Section>
      <ToastContainer />
    </MainContainer>
  );
}
