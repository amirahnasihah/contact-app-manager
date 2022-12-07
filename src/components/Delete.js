import React from "react";

const Delete = ({ match }) => {
  const { itemId } = match.params;
  return (
    <div>
      <p>Are you sure you want to delete item with ID {itemId}?</p>
      <button>Confirm</button>
      <button>Cancel</button>
    </div>
  );
};

export default Delete;
