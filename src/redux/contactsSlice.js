import { createSlice } from '@reduxjs/toolkit';

import initialContacts from '../contactsList.json';

const INITIAL_STATE = {
  items: initialContacts,
};

export const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload,
      );
    },
  },
});

// Генератори Action Creator
export const { addContact, deleteContact } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

// функції-селектори для використання в useSelector
export const selectContacts = state => state.contacts.items;
