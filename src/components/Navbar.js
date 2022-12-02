import React from "react";
import { SiDiscord } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">
          <SiDiscord className="mx-1" />
          users
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
