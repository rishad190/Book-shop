import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Admin from "./Components/Admin/Admin";
import Product from "./Components/Product/Product";
import Header from "./Components/Header/Header";
import { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Checkout from "./Components/Checkout/Checkout";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Login from "./Components/Login/Login";
import AdminDisplay from "./Components/AdminDisplay/AdminDisplay";
import Order from "./Components/Order/Order";
export const UserContext = createContext();
function App() {
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    image: "",
    error: "",
    password: "",
    success: false,
  });
  return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/product">
              <Product />
            </Route>
            <PrivateRoute path="/admindisplay">
              <AdminDisplay></AdminDisplay>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/checkout/:id">
              <Checkout></Checkout>
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>

            <Route path="*">
              <h1>Error</h1>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
