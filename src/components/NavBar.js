import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a href="#home" key= {links[0]}>Home</a>
    <a href="#about" key = {links[1]}>About</a>
    <a href="#projects" key = {links[2]}>Projects</a>
  </nav>;
}

export default NavBar;
