import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../images/avatar.png";
import ConfirmDelete from "./ConfirmDelete";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;

    // 'open' props {bool} whether or not the modal is visible => false; not visible on screen.
    const [open, setOpen] = useState(false);

    const content = "Delete this contact from the list?";

    // show confirmation
    const handleShow = () => {
        setOpen(!open);
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
                </div>

                <ConfirmDelete
                    handleShow={handleShow}
                    content={content}
                    open={open}
                    onCancel={onCancel}
                    onConfirm={onConfirm}
                />
            </div>
        </div>
    );
};

export default ContactCard;
