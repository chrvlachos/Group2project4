import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-inner">
        <nav>
          <ul>
            <li>
              <NavLink className="navlink" to="/home">
                {"Home"}
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/content-helper">
                {"Content Helper"}
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/about">
                {"About"}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
