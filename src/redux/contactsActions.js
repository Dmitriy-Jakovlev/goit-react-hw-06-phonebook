import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add');
const removeContact = createAction('contacts/remove');
const changeFilter = createAction('contacts/changeFilter');

export default { addContact, removeContact, changeFilter };
