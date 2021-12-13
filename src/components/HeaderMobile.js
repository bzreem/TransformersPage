import React from "react";
import logo from "../assets/logos/logo4.png";
const HeaderMobile = () => {
  return (
    <header className="header-styles">
      <nav>
        <a href="sdsd" className="container-img">
          <img src={logo} alt="" />
        </a>

        <a href="Autobots">Autobots</a>
        <a href="Decepticons">Decepticons</a>
      </nav>
    </header>
  );
};

export default HeaderMobile;
