import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import notifyOptions from 'NotifyOptions/NotifyOptions';
import 'react-toastify/dist/ReactToastify.css';
import { RiDeleteBinLine } from 'react-icons/ri';

import { selectFilter, selectContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contacts/operations';

import css from './ContactList.module.css';

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

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.item}>
            <span className={css.name}>{name}:</span>
            <span className={css.phone}>{number}</span>
            <button
              type="button"
              className={css.button}
              onClick={() => onDeleteContact(id)}
            >
              <RiDeleteBinLine size="16" />
            </button>
          </li>
        );
      })}
    </ul>
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
