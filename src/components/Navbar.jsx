import React from "react";

const Navbar = () => {
  return (
    <div id="navbar" className="fixed top-0 h-50">
      <div id="navbar-title">Navbar</div>
      <div id="navbar-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
