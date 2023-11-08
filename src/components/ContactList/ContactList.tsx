import { useState } from 'react';
import ContactCard from '../ContactCard/ContactCard';
import ContactForm from '../ContactForm/ContactForm';


interface Contact {
    id: number;
    name: string;
    contactNumber: string;
};

function ContactList() {

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
        <>
            <h1>Contacts</h1>
            <div className='p-5'>
                <ContactForm addContact={addContact} />
            </div>
            <ul>
                {contacts.map((contact: Contact) => <ContactCard id={contact.id} name={contact.name} contactNumber={contact.contactNumber} deleteContact={deleteContact} />)}
            </ul>
        </>
    );

}

export default ContactList;