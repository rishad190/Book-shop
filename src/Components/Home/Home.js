import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import BookData from "../BookData/BookData";
import "./Home.css";

const Home = () => {
  const [booksData, setbooksData] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    fetch("https://rocky-savannah-92763.herokuapp.com/showdata")
      .then((res) => res.json())
      .then((data) => {
        setbooksData(data);
      });
    setLoading(true);
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {loading ? (
              <div className="box_books">
                {booksData.map((book) => (
                  <BookData key={book._id} bookdata={book}></BookData>
                ))}
              </div>
            ) : (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
