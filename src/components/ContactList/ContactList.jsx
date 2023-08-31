import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import notifyOptions from 'NotifyOptions/NotifyOptions';
import 'react-toastify/dist/ReactToastify.css';
import { RiDeleteBinLine } from 'react-icons/ri';

import { selectFilter, selectContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contacts/operations';

import { Button, List, ListItem, Name, Number } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

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

  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <ListItem key={id}>
            <Name>{name}:</Name>
            <Number>{number}</Number>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              <RiDeleteBinLine size="16" />
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};

export default ContactList;
