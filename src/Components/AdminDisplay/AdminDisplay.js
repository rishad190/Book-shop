import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "../Admin/Admin";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import ManageBook from "../ManageBook/ManageBook";

const AdminDisplay = () => {
  return (
    <div>
      <Router>
        <AdminSideBar></AdminSideBar>
        <Switch>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/manage">
            <ManageBook></ManageBook>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default AdminDisplay;
