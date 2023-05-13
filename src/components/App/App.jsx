import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import ContactForm from "../ContactForm";
import  Filter from "../Filter";
import ContactList from "../ContactList";

const App =()=> {

const contacts = useSelector(getContacts);
const filter = useSelector(getFilter);

  const getFilteredContacts = () =>{
   
    return contacts
			.filter(({name, number}) => name.toLowerCase().includes(filter.toLowerCase())||number.includes(filter));      
  }
  
    
    const filteredContacts=getFilteredContacts();
    

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
      
      <Filter />
      {filteredContacts.length>0 ? <ContactList contacts={filteredContacts}/> 
      :<p>There is no contacts by query</p>}    

    </div>
  );
  

};
export default App;