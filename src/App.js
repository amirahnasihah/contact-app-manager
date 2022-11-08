import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import ContactDetail from "./components/ContactDetail";
import EditContact from "./components/EditContact";
import { ContactsCrudProviderContext } from "./context/ContactsCrudContext";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudProviderContext>
          <Routes>
            {/* Contact List */}
            <Route path="/" exact element={<ContactList />} />
            {/* ADD */}
            <Route path="/add" element={<AddContact />} />
            {/* EDIT */}
            <Route path="/edit" element={<EditContact />} />
            {/* Contact Detail */}
            <Route path="/contact/:id" element={<ContactDetail />} />
          </Routes>
        </ContactsCrudProviderContext>
      </Router>
    </div>
  );
}

export default App;
