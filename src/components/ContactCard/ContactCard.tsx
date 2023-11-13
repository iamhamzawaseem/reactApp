
interface Contact {
    id: number,
    name: string,
    contactNumber: string,
    deleteContact: (id: number) => void,
}

function ContactCard({ id, name, contactNumber, deleteContact }: Contact) {

    return (
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title">Contact ID: {id}</h5>
                <p className="card-text">Name: {name}</p>
                <a href={'tel:' + contactNumber}><p className="card-text">ContactNumber: {contactNumber}</p></a>
                <button className="btn btn-danger" onClick={() => deleteContact(id)}>Delete</button>
            </div>
        </div >
    );

}

export default ContactCard;