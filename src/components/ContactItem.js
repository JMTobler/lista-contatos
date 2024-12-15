import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../features/contactsSlice';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  background-color: ${(props) => (props.edit ? '#ffc107' : '#dc3545')};
  color: white;
  border: none;
  cursor: pointer;
`;

const ContactItem = ({ contact, setEditingContact }) => {
  const dispatch = useDispatch();

  return (
    <ItemWrapper>
      <div>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
      <div>
        <Button edit onClick={() => setEditingContact(contact)}>Editar</Button>
        <Button onClick={() => dispatch(removeContact(contact.id))}>Remover</Button>
      </div>
    </ItemWrapper>
  );
};

export default ContactItem;