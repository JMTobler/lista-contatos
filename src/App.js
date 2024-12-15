import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
  const [editingContact, setEditingContact] = useState(null);

  return (
    <Provider store={store}>
      <div>
        <h1>Lista de Contatos</h1>
        <ContactForm editingContact={editingContact} setEditingContact={setEditingContact} />
        <ContactList setEditingContact={setEditingContact} />
      </div>
    </Provider>
  );
};

export default App;