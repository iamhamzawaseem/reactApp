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
            <h3>Contact List</h3>
            <ul>
                {contacts?.length ? contacts.map((contact: Contact) => <ContactCard id={contact.id} name={contact.name} contactNumber={contact.contactNumber} deleteContact={deleteContact} />) : "No contacts found."}
            </ul>
        </>
    );

}

export default ContactList;