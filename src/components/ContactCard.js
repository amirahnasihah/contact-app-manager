import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";
import avatar from "../images/avatar.png";
import ConfirmDelete from "./ConfirmDelete";

const ContactCard = (props) => {
  const { removeContactHandler } = useContactsCrud();
  const deleteContact = (id) => {
    removeContactHandler(id);
  };
  const { id, name, email } = props.contact;
  const [open, setOpen] = useState(false);
  const content = "Delete this contact from the list?";

  // show dialog
  const handleShow = () => {
    setOpen(!open);
  };

  // confirm action
  const onConfirm = () => {
    // props.clickHandler(id);
    deleteContact(id);
    setOpen(!open);
  };

  // cancel action
  const onCancel = () => {
    setOpen(!open);
  };

  return (
    <div className="ui celled list">
      <div className="item">
        <img className="ui avatar image" src={avatar} alt="profile" />
        <div className="content">
          <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
            <div className="header">{name}</div>
            <div>{email}</div>
          </Link>
        </div>

        {/* DELETE */}
        <ConfirmDelete
          handleShow={handleShow}
          content={content}
          open={open}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />

        {/* EDIT */}
        <Link to={`/edit`} state={{ contact: props.contact }}>
          <i
            className="edit black right floated icon"
            style={{ marginTop: "10px", cursor: "pointer" }}
          ></i>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
