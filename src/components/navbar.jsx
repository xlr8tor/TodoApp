import React from "react";
import "../custom.css";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#"></a>
      <span className="navbar-text">TodoApp</span>
      <span className="badge badge-light">{props.totalTodos}</span>
    </nav>
  );
};

export default Navbar;
