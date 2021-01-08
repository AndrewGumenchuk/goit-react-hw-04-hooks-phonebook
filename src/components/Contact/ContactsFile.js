import PropTypes from 'prop-types';
import './ContactsFile.css';

function ContactsFile({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="item_contact">
          <p className="item_text">{name}</p>
          <p className="item_text">{number}</p>
          <button className="item__buttom" onClick={() => onDeleteContact(id)}>
            delete
        </button>
        </li>
      ))}
    </ul>
  );
}
  ContactsFile.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
  };
  export default ContactsFile;