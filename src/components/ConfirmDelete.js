import React from "react";
import { Confirm, Icon } from "semantic-ui-react";

const ConfirmDelete = (props) => {
  return (
    <div className="right floated content">
      <Icon
        className="trash red icon"
        style={{ marginTop: "10px", cursor: "pointer" }}
        onClick={props.handleShow}
      ></Icon>

      <Confirm
        content={props.content}
        open={props.open}
        onCancel={props.onCancel}
        onConfirm={props.onConfirm}
      />
    </div>
  );
};

export default ConfirmDelete;
