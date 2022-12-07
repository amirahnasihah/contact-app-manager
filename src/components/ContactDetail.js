import React from "react";
import { Link } from "react-router-dom";
import pic from "../images/pic.jpg";

const ContactDetail = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <div className="ui header" id="fonts">
      <div className="ui column">
        <div
          className="ui centered card"
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          }}
        >
          <div className="image">
            <img src={pic} alt="add user" />
          </div>
          <div className="content">
            <div className="header" id="fonts">
              {name}
            </div>
            <div className="description">{email}</div>
          </div>
        </div>
      </div>
      <Link to="/">
        <div className="ui center aligned basic segment">
          <button className="ui button blue">Back to Contact List</button>
        </div>
      </Link>
    </div>
  );
};

export default ContactDetail;
