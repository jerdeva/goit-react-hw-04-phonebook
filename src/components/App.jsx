import {  useEffect, useState } from "react";
import { FormPhonebook } from './FormPhonebook/FormPhonebook'
import { nanoid } from 'nanoid';
import { FilterForm } from './FilterForm/FilterForm';
import { ContactsList } from './ContactsList/ContactsList'
// import React from 'react';


const localStInitialContacts = () => {
        const savedContacts = localStorage.getItem('saved-contacts');
    if (savedContacts !== null) {
      return  JSON.parse(savedContacts)
    }
    return []
}


export const App = () => {    
    const [contacts, setContacts] = useState(localStInitialContacts);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('saved-contacts', JSON.stringify(contacts))
    }, [contacts]);


    const addContact = newContact => {
        const { name, number } = newContact;
        const isExist = contacts.some(
                contact => contact.name.toLowerCase() === name.toLowerCase()
                || contact.number === number
        );
  
        if (isExist) {
            alert(`${newContact.name} or ${newContact.number} is already in Phonebook.`);
            return;
        }
   
        setContacts(prevState => ({
            ...prevState.contacts,
         id: nanoid(), ...newContact 
    
    }))
    }
    
    const deleteContact = contactId => {
        setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  };
    

     const searchContact = newContactName => {
    setFilter(newContactName);
  };
    
    const showList = contacts.filter(contact => {
        contact.name.toLowerCase().includes(filter.toLowerCase())
      
    });
    
    return (
      <div>
        <h1>Phonebook</h1>
        <FormPhonebook onAdd={addContact} />
        <h2>Contacts:</h2>
        <FilterForm filter={filter} onSearch={searchContact} />
        <ContactsList filterList={showList} deleteContact={deleteContact} />
      </div>
    );
  
};
