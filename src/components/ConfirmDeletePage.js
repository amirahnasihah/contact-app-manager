import { Route } from "react-router-dom";
import ConfirmDelete from "./ConfirmDelete";
import ContactCard from "./ContactCard";

const ConfirmDeleteWrapper = (props) => {
  return (
    <div>
      <ConfirmDelete
        content={props.content}
        open={props.open}
        onCancel={props.onCancel}
        onConfirm={props.onConfirm}
        handleShow={props.handleShow}
      />
      {/* <Route path="/confirm-delete/:id" component={ContactCard} /> */}
    </div>
  );
};

export default ConfirmDeleteWrapper;
