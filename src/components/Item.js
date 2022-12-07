import { Link } from "react-router-dom";

const Item = ({ id, name }) => (
  <div>
    <span>{name}</span>
    <Link to={`/confirm-delete/${id}`}>Delete</Link>
  </div>
);

export default Item;
