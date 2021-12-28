import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/logo4.png";
const HeaderMobile = () => {
  return (
    <>
    <header className="header-styles-2">
        <nav>
          {/* <a href="sdsd" className="container-img">
          <img src={logo} alt="" />
        </a> */}

          <Link className="container-img" to="/">
            <img src={logo} alt="" />
          </Link>

          <Link to="autobots">AUTOBOTS</Link>
          <Link to="decepticons">DECEPTICONS</Link>
          {/* <a href="Autobots">Autobots</a>
        <a href="Decepticons">Decepticons</a> */}
        </nav>
      </header>
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
          {/* <a href="Autobots">Autobots</a>
        <a href="Decepticons">Decepticons</a> */}
        </nav>
      </header>
    </>
  );
};

export default HeaderMobile;
