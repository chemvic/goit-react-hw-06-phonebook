import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList=()=>{
  const contacts = useSelector(getContacts);
 
    return(
             <ul className={css.contacts}>
       {contacts.contacts
			.map(({name, number, id}) => (
      <Contact key={id} name={name} number={number}
       id={id}/>
            ))}
       </ul>
    )
}


export default ContactList;