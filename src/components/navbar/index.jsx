import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import "./style.scss";

const data = [
  { label: "HOME", to: "#home" },
  { label: "ABOUT ME", to: "#about" },
  { label: "SKILLS", to: "#skills" },
  { label: "PROJECTS", to: "#projects" },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <a href="#home" className="navbar_container_logo">
          <p>AKHIL VARKEY</p>
        </a>
      </div>


      <ul className="navbar_container_menu desktop-menu">
        {data.map((item, key) => (
          <li key={key} className="navbar_container_menu_item">
            <a href={item.to}
              className="navbar_container_menu_item_links"

            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {toggleIcon && (
        <ul className="navbar_container_menu mobile-menu">
          {data.map((item, key) => (
            <li key={key} className="navbar_container_menu_item">
              <a
                href={item.to}
                className="navbar_container_menu_item_links"
                onClick={() => setToggleIcon(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <div className="nav-icon" onClick={() => setToggleIcon(!toggleIcon)}>
        {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;
