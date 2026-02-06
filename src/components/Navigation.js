import React from "react";
import { Link } from "react-router-dom@5";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navigation;
