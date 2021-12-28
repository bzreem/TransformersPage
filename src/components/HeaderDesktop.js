import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../assets/logos/logo4.png";
const HeaderDesktop = () => {
  return (
    <>
        <div className="bg-black"></div>
      <header className="header-styles">
        <nav>
          {/* <a href="sdsd" className="container-img">
          <img src={logo} alt="" />
        </a> */}
          <Link className="container-img" to="/">
            <img src={logo} alt="" />
          </Link>

          <Link to="autobots">AUTOBOTS</Link>
          <Link to="decepticons">DECEPTICONS</Link>
          <Link to="OptimusPrime">OPTIMUS PRIME</Link>
          <Link to="Megatron">MEGATRÓN</Link>

          {/* <a href="Autobots">Autobots</a>
        <a href="Decepticons">Decepticons</a>
        <a href="Decepticons">Optimus Prime</a>
        <a href="Decepticons">Megatron</a> */}
        </nav>
      </header>
    </>
  );
};

export default HeaderDesktop;
