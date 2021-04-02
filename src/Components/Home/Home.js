import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BookData from "../BookData/BookData";
import "./Home.css";

const Home = () => {
  const [booksData, setbooksData] = useState([]);

  useEffect(() => {
    fetch("https://rocky-savannah-92763.herokuapp.com/showdata")
      .then((res) => res.json())
      .then((data) => {
        setbooksData(data);
      });
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="box_books">
              {booksData.map((book) => (
                <BookData key={book._id} bookdata={book}></BookData>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
