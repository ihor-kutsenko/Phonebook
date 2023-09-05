import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { toast } from 'react-toastify';
import notifyOptions from 'NotifyOptions/NotifyOptions';
import 'react-toastify/dist/ReactToastify.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Tooltip } from '@chakra-ui/react';
import Avatar from '@mui/material/Avatar';

import { ContactModal } from 'components/Modal/Modal';
import { selectFilter, selectContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contacts/operations';

import { abbrevName } from 'utils/abbrevname';
import { getRandomHexColor } from 'utils/getRandomHexColor';

import {
  Button,
  List,
  ListItem,
  Name,
  Number,
  ModalPictureWrapper,
} from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const [selectedContact, setSelectedContact] = useState(null);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));

    const deletedContact = contacts.find(contact => contact.id === id);
    if (deletedContact) {
      toast.warn(
        `${deletedContact.name} was successfully deleted from your contacts`,
        notifyOptions
      );
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  // variant useMemo
  // const filteredContacts = usememo(()=> {
  // return contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter)
  // )
  // }, [contacts, filter]);

  const closeModal = () => {
    setSelectedContact(null);
  };
  const setModalData = id => {
    const selectContact = contacts.find(contact => contact.id === id);
    setSelectedContact(selectContact);
  };

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: getRandomHexColor(),
      },
      children: abbrevName(name),
    };
  }

  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <>
            <ListItem key={id}>
              <Tooltip label="Click" color="#000" fontSize="xs">
                <ModalPictureWrapper>
                  <Avatar
                    onClick={() => setModalData(id)}
                    {...stringAvatar(Object.values(name).join(''))}
                  />
                </ModalPictureWrapper>
              </Tooltip>
              <Name>{name}:</Name>
              <Number>{number}</Number>
              <Button type="button" onClick={() => onDeleteContact(id)}>
                <RiDeleteBinLine size="16" />
              </Button>
            </ListItem>
            <ContactModal
              isOpen={selectedContact !== null}
              onClose={closeModal}
              data={selectedContact}
            />
          </>
        );
      })}
    </List>
  );
};

export default ContactList;
