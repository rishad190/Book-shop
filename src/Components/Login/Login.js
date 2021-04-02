import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../App";

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.Config";
import { useHistory, useLocation } from "react-router";
import logo from "../../img/Group_573.png";
import "./Login.css";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const googleLogin = (e) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signInDetails = {
          name: displayName,
          email: email,
          success: true,
          image: photoURL,
        };
        setUser(signInDetails);
        history.replace(from);

        // ...
      })
      .catch((error) => {
        // Handle Errors here.

        var errorMessage = error.message;
        console.log(errorMessage);

        // ...
      });
    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Login</h1>
            <div className="btn_main">
              <button onClick={googleLogin}>
                <div className="btn_box">
                  <img src={logo} alt="Google" />
                  <p>Continue with Google</p>
                </div>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
