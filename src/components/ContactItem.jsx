import "../styles/contact-item.css";
function ContactItem({ contact, onDelete }) {
  return (
    <li className="contact-item">
      <div className="contact-item__info">
        <p className="contact-item__name">{contact.name}</p>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>
      <button
        className="contact-item_delete"
        onClick={() => onDelete(contact.id)}
      >
        Удалить
      </button>
    </li>
  );
}
export default ContactItem;
