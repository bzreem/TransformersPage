import React from "react";
import logo from "../assets/logos/logo4.png";
const HeaderDesktop = () => {
  return (
    <header className="header-styles">
      <nav>
        <a href="sdsd" className="container-img">
          <img src={logo} alt="" />
        </a>

        <a href="Autobots">Autobots</a>
        <a href="Decepticons">Decepticons</a>
        <a href="Decepticons">Optimus Prime</a>
        <a href="Decepticons">Megatron</a>
      </nav>
    </header>
  );
};

export default HeaderDesktop;
