import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./styles/App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log("Список контактов обновлён", contacts);
  }, [contacts]);

  const addContact = (contact) => {
    setContacts((prev) => [...prev, contact]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <div className="app">
      <h1 className="app_title">Контакт-менеджер</h1>
      <ContactForm onAdd={addContact} />
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
