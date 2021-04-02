import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import "./Checkout.css";

const Checkout = () => {
  const [user, setUser] = useContext(UserContext);

  const [productData, setProduct] = useState({});

  const [selectedDate, setSelectedDate] = useState({
    order_date: "",
    product: "",
    price: "",
  });
  console.log(selectedDate);

  const handleData = () => {
    const newProduct = { ...selectedDate };
    newProduct.product = productData.bookname;
    newProduct.price = productData.price;
    newProduct.order_date = new Date();
    setSelectedDate(newProduct);
  };

  const handleSubmit = () => {
    const newProduct = { ...selectedDate };
    newProduct.product = productData.bookname;
    newProduct.price = productData.price;
    newProduct.order_date = new Date();
    setSelectedDate(newProduct);

    const newOrder = { ...user, ...selectedDate };
    fetch("https://rocky-savannah-92763.herokuapp.com/addorder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const { id } = useParams();
  useEffect(() => {
    fetch("https://rocky-savannah-92763.herokuapp.com/showdata")
      .then((res) => res.json())
      .then((data) => {
        const product = data.find((pd) => pd._id === id);
        setProduct(product);
      });
  }, [id]);
  const { _id, bookname, price } = productData;

  return (
    <div>
      <Container>
        <h1>CheckOut</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bookname}</td>
              <td>1</td>
              <td>${price}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td></td>
              <td>${price}</td>
            </tr>
          </tbody>
        </Table>
        <div className="checkout_btn">
          <button onMouseOver={handleData} onClick={handleSubmit}>
            Checkout
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
