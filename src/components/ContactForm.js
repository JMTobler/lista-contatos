import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../features/contactsSlice';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const ContactForm = ({ editingContact, setEditingContact }) => {
  const [name, setName] = useState(editingContact?.name || '');
  const [email, setEmail] = useState(editingContact?.email || '');
  const [phone, setPhone] = useState(editingContact?.phone || '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingContact) {
      dispatch(editContact({ ...editingContact, name, email, phone }));
      setEditingContact(null);
    } else {
      dispatch(addContact({ id: Date.now(), name, email, phone }));
    }
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input placeholder="Nome Completo" value={name} onChange={(e) => setName(e.target.value)} />
      <Input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <Button type="submit">{editingContact ? 'Editar' : 'Adicionar'}</Button>
    </FormWrapper>
  );
};

export default ContactForm;