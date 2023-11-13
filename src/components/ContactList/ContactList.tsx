import ContactCard from '../ContactCard/ContactCard';


interface Contact {
    id: number;
    name: string;
    contactNumber: string;
};

interface ContactListProps {
    deleteContact: (contactID: number) => void;
    contacts: Contact[];
}


function ContactList({ deleteContact, contacts }: ContactListProps) {
    return (
        <>
            <ul>
                {contacts.map((contact: Contact) => <ContactCard id={contact.id} name={contact.name} contactNumber={contact.contactNumber} deleteContact={deleteContact} />)}
            </ul>
        </>
    );

}

export default ContactList;