import React, { useEffect, useState } from "react";
import { useResizeWindow } from "../hooks/useResizeWindow";
import "./Header.css";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
const Header = () => {
  let [mq] = useResizeWindow("(min-width: 800px)");
  let [header, setHeader] = useState(null);

  useEffect(() => {
    if (mq === null) return;

    if (mq) {
      setHeader(<HeaderDesktop />);
    } else {
      setHeader(<HeaderMobile />);
    }

    return ()=>{}
  }, [mq]);
  return <>{header}</>;
};

export default Header;
