import { getVisibleContacts } from './components/redux/phonebook-selectors';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(getVisibleContacts);
  const totalContactsCount = contacts.length;

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <p>Общее кол-во: {totalContactsCount}</p>
      <Filter />
      <ContactList />
    </>
  );
}
