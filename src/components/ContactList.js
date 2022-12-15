import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

function ContactList(props) {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="ui header">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui right floated button blue">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled">{renderContactList}</div>
    </div>
  );
}

export default ContactList;
