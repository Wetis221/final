import { useState } from "react";
import "../styles/contact-form.css";
function ContactForm({ onAdd }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      name,
      phone,
      email,
    });
    setName("");
    setPhone("");
    setEmail("");
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        className="contact-form_input"
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="contact-form_input"
        type="tel"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        className="contact-form_input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className="contact-form_button">Добавить</button>
    </form>
  );
}

export default ContactForm;
