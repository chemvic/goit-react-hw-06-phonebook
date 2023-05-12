import useLocalStorage from '../../hooks/useLocalStorage';
// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import ContactForm from "../ContactForm";
import  Filter from "../Filter";
import ContactList from "../ContactList";

const App =()=> {
// const dispatch=useDispatch();
// const contacts=useSelector(state=>state.contacts);


//   const formSubmitHandler=(newContact)=>{
   
//     if(contacts
// 			.find(({name, number}) => name.toLowerCase()===(newContact.name.toLowerCase())||number===newContact.number)){
//         alert(`${newContact.name} is already in contacts.`);
//         return;
//       }   

// // setContacts([...contacts, newContact])

//   }

//   const onDeleteContact=(contactId)=>{
//         setContacts(contacts.filter(contact=>contact.id!==contactId));

//       };

//      const changeFilter = (event) => {
//         setFilter( event.currentTarget.value );
//       };
   

//   const getFilteredContacts = () =>{
   
//     return contacts
// 			.filter(({name, number}) => name.toLowerCase().includes(filter.toLowerCase())||number.includes(filter));      
//   }


	
   
    
//     const filteredContacts=getFilteredContacts();
    

      return (
    <div
      style={{
        padding: 30,      
        color: '#010101'
      }}
    > 
    <h1 className="title">Phonebook</h1>

    <ContactForm />
     
    <h2 className="title">Contacts</h2>
       <ContactList/>
      {/* <Filter value={filter} onQuery={changeFilter} />

      {filteredContacts.length>0 ? <ContactList contacts={filteredContacts} onDelete={onDeleteContact}/> 
      :<p>There is no contacts by query</p>}     */}

    </div>
  );
  

};
export default App;