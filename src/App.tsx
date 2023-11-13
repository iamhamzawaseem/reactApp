import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './components/ContactForm/ContactForm';

interface Contact {
  id: number;
  name: string;
  contactNumber: string;
};

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const addContact = (newContact: Contact) => {
    const newID = contacts.length;
    newContact.id = newID + 1;
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id: number) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };


  return (
    <div className="App p-5">
      <h1>Contacts</h1>
      <div className='p-5'>
        <ContactForm addContact={addContact} />
      </div>
      <ContactList contacts={contacts} deleteContact={deleteContact}></ContactList>
    </div>
  );
}

export default App;
