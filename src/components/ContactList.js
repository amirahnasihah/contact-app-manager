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
                    <button className="ui right floated button blue">
                        Add Contact
                    </button>
                </Link>
            </h2>

            <div className="ui celled">{renderContactList}</div>
        </div>
    );
}

export default ContactList;

// useRef()

// const inputElement = useRef("");

// need to bind this useRef to the input tag so if we want to bind that what we can do we can come here and we can add the ref and this ref will be equals to the input element all right so now we have bind the useRef hook with our input tag

// const getSearchTerm = () => {
//     console.log(inputElement);
//     console.log(inputElement.current.value); // actually going to give me the value of whatever i am typing in my input box @ can use e.target.value
//     props.searchKeyword(inputElement.current.value); //
// };

// Search
// <input
// ref={inputElement}
// type="text"
// placeholder="Search Contacts"
// className="prompt"
// value={props.term}
// onChange={getSearchTerm}
// />;

// App.js
// app.js have added the searchKeyword as a prop so let's go and add this prop to ContactList

// const [searchTerm, setSearchTerm] = useState("");
// const [searchResults, setSearchResults] = useState([]);

// const searchHandler = (searchTerm) => {
//     console.log(searchTerm); // getting the value of the name we typing @ same as setSearchTerm(e.target.value);
//     setSearchTerm(searchTerm);
//     if (searchTerm !== "") {
//         const newContactList = contacts.filter((contact) => {
//             console.log(Object.values(contact).join(""));
//             return Object.values(contact)
//                 .join("")
//                 .toLowerCase()
//                 .includes(searchTerm.toLowerCase());
//         });
//         setSearchResults(newContactList);
//     } else {
//         setSearchResults(contacts);
//     }
// };

// this string becomes object dot values we get the contact we make the join on the contact we make it to a lower case and then we check that this is included in the search term or not if it's included then it's going to return a true

// <ContactList
// {...props}
// contacts={searchTerm.length < 1 ? contacts : searchResults}
// getContactId={removeContactHandler}
// term={searchTerm}
// searchKeyword={searchHandler}
// >;

// need to apply this search results in our <ContactList />
