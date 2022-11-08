import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const EditContact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name, email } = location.state.contact;
  const [newEmail, setNewEmail] = useState(email);
  const [newName, setNewName] = useState(name);
  const { updateContactHandler } = useContactsCrud();

  const update = (e) => {
    e.preventDefault();
    if (newName === "" || newEmail === "") {
      alert("All fields are required!");
      return;
    }
    updateContactHandler({ id, name: newName, email: newEmail });
    setNewName("");
    setNewEmail("");
    navigate("/");
  };

  return (
    <div className="ui header">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="first-name"
            placeholder="Name"
            value={newName}
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => {
              setNewEmail(e.target.value);
            }}
          />
        </div>

        <button className="ui green button">Update</button>
        <Link to="/">
          <button className="ui grey button">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default EditContact;
