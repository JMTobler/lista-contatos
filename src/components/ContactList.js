import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactList = ({ setEditingContact }) => {
  const contacts = useSelector(state => state.contacts);

  return (
    <ListWrapper>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} setEditingContact={setEditingContact} />
      ))}
    </ListWrapper>
  );
};

export default ContactList;