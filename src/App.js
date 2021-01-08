import { useState, useEffect } from 'react';
import ContactsFile from './components/Contact/';
import { v4 as uniqueId } from 'uuid';
import ContactForm from './components/ContactForm/';
import Filter from './components/Filter/';
import './App.css';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue,
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    };
     const newContacts = {
      id: uniqueId(),
      name,
      number,
    };

    setContacts(prevState => [newContacts, ...prevState]);
  };
  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };
  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };
  const visibleContacts = () => {
    const normalized = filter.toLowerCase().trim();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalized),
    );
  };

    return (
      <div className="Container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChangle={changeFilter} />
        {!contacts.length && <div>No contacts! Please add someone!</div>}
        <ContactsFile
          contacts={visibleContacts()}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }

export default App;
