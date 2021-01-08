import { useState } from 'react';
import './ContactForm.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

   const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
    return (
      <form className="item_form" onSubmit={handleSubmit}>
        <label>
          Ім’я
          <input
            className="item_input"
            type="text"
            name="name"
            placeholder="Annie Copeland"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
         Phone
          <input
            className="item_input"
            type="text"
            name="number"
            placeholder="111-11-11"
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit" disabled={name === '' || number === ''}>
          Save contact
        </button>
      </form>
    );
  }

export default ContactForm;
