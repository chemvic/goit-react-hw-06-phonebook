import PropTypes from 'prop-types';
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList=({contacts})=>{
 
    return(
             <ul className={css.contacts}>
       {contacts
			.map(({name, number, id}) => (
      <Contact key={id} name={name} number={number}
       id={id}/>
            ))}
       </ul>
    )
}
ContactList.propTypes={
  contacts: PropTypes.arrayOf(
      PropTypes.exact(
        {
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,            
          id: PropTypes.string.isRequired   
        }
      ),
    ),
}

export default ContactList;