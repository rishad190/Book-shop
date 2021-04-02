import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import OrderDetials from "../OrderDetials/OrderDetials";
import { UserContext } from "../../App";

const Order = () => {
  const [user, setUser] = useContext(UserContext);
  const [order, setorder] = useState([]);
  useEffect(() => {
    fetch(
      "https://rocky-savannah-92763.herokuapp.com/showOrderData?email=" +
        user.email
    )
      .then((res) => res.json())
      .then((data) => {
        setorder(data);
      });
  }, []);
  console.log(order);
  return (
    <div>
      <Container>
        <Row>
          <Col className="table_box2">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {order.map((pd) => (
                  <OrderDetials key={pd._id} data={pd}></OrderDetials>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Order;
