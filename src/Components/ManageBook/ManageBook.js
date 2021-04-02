import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import AdminAction from "../AdminAction/AdminAction";
import "./ManageBook.css";

const ManageBook = () => {
  const [manage, setManage] = useState([]);
  useEffect(() => {
    fetch("https://rocky-savannah-92763.herokuapp.com/showdata")
      .then((res) => res.json())
      .then((data) => {
        setManage(data);
      });
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col className="table_box">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Book Name</th>
                  <th>Author Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {manage.map((list) => (
                  <AdminAction key={list._id} list={list}></AdminAction>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ManageBook;
