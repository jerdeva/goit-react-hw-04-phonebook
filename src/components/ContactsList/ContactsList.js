import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import List from './ContatctList.styled'
import ItemOfList from './ContatctList.styled'


export const ContactsList = ({ filterList, deleteContact }) => {
  return (
    <List>
      {filterList.map(item => {
        return (
          <ItemOfList key={item.id}>
            <ContactInfo contact={item} onDelete={deleteContact} />
          </ItemOfList>
        );
      })}
    </List>
  );
};
