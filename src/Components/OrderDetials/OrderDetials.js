import React from "react";

const OrderDetials = (props) => {
  const { name, email, price, order_date, product } = props.data;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{product}</td>
      <td>{price}</td>
      <td>{new Date(order_date).toDateString("dd/MM/yyyy")}</td>
    </tr>
  );
};

export default OrderDetials;
