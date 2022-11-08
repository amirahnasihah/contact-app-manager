import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";
import ContactCard from "./ContactCard";

function ContactList(props) {
  const {
    contacts,
    retrieveContacts,
    searchTerm,
    searchResults,
    searchHandler,
  } = useContactsCrud();

  useEffect(() => {
    retrieveContacts();
  }, [retrieveContacts]);

  const renderContactList = (
    searchTerm.length < 1 ? contacts : searchResults
  ).map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });

  const onUserSearch = (e) => {
    //console.log(inputElement.current.value);
    searchHandler(e.target.value);
  };

  return (
    <div className="ui header">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui right floated button blue">Add Contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search contact..."
            className="prompt"
            value={searchTerm}
            onChange={(e) => onUserSearch(e)}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <br />
      <div className="ui celled">
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts Available"}
      </div>
    </div>
  );
}

export default ContactList;
