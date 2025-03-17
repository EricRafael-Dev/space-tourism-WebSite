import React, { useState } from "react";
import logo from "/shared/logo.svg";
import burger from "/shared/icon-hamburger.svg";
import close from "/shared/icon-close.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuAppear, setMenuAppear] = useState(false);

  return (
    <div className="flex items-center justify-between p-[24px] w-full h-[10vh] fixed z-60 top-0 ">
      <button>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </button>
      <button onClick={() => setMenuAppear(true)} className="cursor-pointer">
        <img src={burger} alt="" />
      </button>

      <div
        className={`fixed top-0 right-0 backdrop-blur-xl h-full p-8 flex items-center flex-col  ${
          menuAppear ? "" : "hidden"
        }`}
      >
        <button
          onClick={() => setMenuAppear(false)}
          className="p-8 cursor-pointer absolute top-0 right-0"
        >
          <img src={close} alt="" />
        </button>
        <li className=" flex flex-col gap-6 justify-around mt-[25vh] font-[100] [&_strong]:font-bold [&_strong]:tracking-0 [&_ul]:tracking-[2px] text-white [&_ul]:w-[220px] [&_ul]:h-[30px] [&_ul]:text-[20px] [&_ul]:uppercase [&_ul]:cursor-pointer [&_ul]:hover:border-r-white [&_ul]:hover:border-r-4">
          <Link to="/">
            <ul onClick={() => setMenuAppear(false)}>
              <strong>00</strong> Home
            </ul>
          </Link>
          <Link to="/destination/moon">
            <ul onClick={() => setMenuAppear(false)}>
              <strong>01</strong> Destination
            </ul>
          </Link>
          <Link to="/crew/douglas_hurley">
            <ul onClick={() => setMenuAppear(false)}>
              <strong>02</strong> Crew
            </ul>
          </Link>
          <Link to="/technology/launch_vehicle">
            <ul onClick={() => setMenuAppear(false)}>
              <strong>03</strong> Technology
            </ul>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Header;
