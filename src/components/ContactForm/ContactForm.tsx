import { useState } from 'react';


interface Contact {
    id: number;
    name: string;
    contactNumber: string;
};

interface ContactFormProps {
    addContact: (newContact: Contact) => void;
}

function ContactForm({ addContact }: ContactFormProps) {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (name && contactNumber) {
            const newContact = {
                id: parseInt(id),
                name,
                contactNumber,
            };

            addContact(newContact);

            setName('');
            setId('');
            setContactNumber('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="contactNumber" className="form-label">
                    Contact Number
                </label>
                <input
                    type="tel"
                    className="form-control"
                    id="contactNumber"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Add Contact
            </button>
        </form>
    )
}

export default ContactForm;