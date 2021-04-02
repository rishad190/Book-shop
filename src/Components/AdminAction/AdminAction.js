import React from "react";
import icon from "../../img/Group 33150.png";
import "./AdminAction.css";
const AdminAction = (props) => {
  const { bookname, price, author, _id } = props.list;
  const handleDelete = (id) => {
    fetch(`https://rocky-savannah-92763.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <tr>
      <td>{bookname}</td>
      <td>{author}</td>
      <td>{price}</td>
      <td>
        <div className="action_btn">
          <button onClick={() => handleDelete(_id)}>
            <img src={icon} alt="" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AdminAction;
