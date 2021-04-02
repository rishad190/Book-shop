import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BookData.css";
import Button from "react-bootstrap/Button";

const BookData = (props) => {
  const { bookname, author, price, image, _id } = props.bookdata;
  const [cart, setCart] = useState();

  return (
    <div>
      <div className="book_box"></div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{bookname}</Card.Title>
          <Card.Text>{author}</Card.Text>
          <div className="link_box">
            <h2>${price}</h2>
            <Link to={`/checkout/${_id}`}>
              <Button variant="primary">Buy Now</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookData;
