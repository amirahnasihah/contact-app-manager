import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import ContactDetail from "./components/ContactDetail";

function App() {
    const LOCALS_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState(
        JSON.parse(localStorage.getItem(LOCALS_STORAGE_KEY)) ?? []
    );

    const addContactHandler = (contact) => {
        console.log(contact);
        setContacts([...contacts, { id: uuidv4(), ...contact }]);
    };

    // to delete contact
    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });

        setContacts(newContactList);
    };

    useEffect(() => {
        localStorage.setItem(LOCALS_STORAGE_KEY, JSON.stringify(contacts));

        return () => {
            //console.log("s");
        };
    }, [contacts]);

    return (
        <div className="ui container">
            <Router>
                <Header />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(props) => (
                            <ContactList
                                {...props}
                                contacts={contacts}
                                getContactId={removeContactHandler}
                            />
                        )}
                    />
                    <Route
                        path="/add"
                        render={(props) => (
                            <AddContact
                                {...props}
                                addContactHandler={addContactHandler}
                            />
                        )}
                    />
                    <Route
                        path="/contact/:id"
                        component={ContactDetail}
                    ></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
