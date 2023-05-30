import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="flex flex-row pt-2">
          <div className=" flex basis-1/2">
            <div className="py-2 px-20 font-bold bg-contain bg-no-repeat bg-center bg-logo"></div>
            <ul className="nav py-5 px-5 flex flex-nowrap font-serif ">
              <li className="pr-5">
                <Link to="/">О НАС</Link>
              </li>
              <li className="pr-3">
                <Link to="/products">ПРОДУКЦИЯ</Link>
              </li>
              <li className="pr-3">
                <Link to="/services">УСЛУГИ</Link>
              </li>
            </ul>
          </div>
          <div className=" py-5 basis-1/2">
            <div className="flex flex-row-reverse pr-10">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
