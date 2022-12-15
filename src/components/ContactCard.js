import React, { useState, useEffect } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import avatar from "../images/avatar.png";
import ConfirmDelete from "./ConfirmDelete";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const content = "Delete this contact from the list?";

  // show confirmation
  const handleShow = () => {
    setOpen(!open);
    // history.push(`/confirm-delete/${id}`);
  };

  // delete contact
  const onConfirm = () => {
    props.clickHandler(id);
    setOpen(!open);
  };

  // cancel action
  const onCancel = () => {
    setOpen(!open);
  };

  // // show modal when the page loads
  // useEffect(() => {
  //   handleShow();
  // }, []);

  return (
    <div className="ui celled list">
      <div className="item">
        <img className="ui avatar image" src={avatar} alt="profile" />
        <div className="content">
          <Link
            to={{
              pathname: `/contact/${id}`,
              state: { contact: props.contact },
            }}
          >
            <div className="header">{name}</div>
            <div className="content">{email}</div>
          </Link>
          <p>card contact</p>
        </div>

        <ConfirmDelete
          content={content}
          open={open}
          onCancel={onCancel}
          onConfirm={onConfirm}
          handleShow={handleShow}
        />
      </div>
    </div>
  );
};

export default ContactCard;
