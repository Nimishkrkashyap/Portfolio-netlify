import React, { useState } from "react";
import menuStyle from "./Menu.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navStyle = showMenu ? menuStyle.links_show : menuStyle.links_hide;
  return (
    <>
      <div className={menuStyle.nav}>
        <div
          className={menuStyle.hamburgur}
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <AiOutlineClose className={menuStyle.icon} />
          ) : (
            <GiHamburgerMenu className={menuStyle.icon} />
          )}
        </div>
        <div className={menuStyle.navName}>
          <h3 className={menuStyle.heading}>Menu</h3>
        </div>
      </div>
      <div className={navStyle}>
        <ul className={menuStyle.list_parent}>
          <li className={menuStyle.list}>
            <Link
              onClick={() => setShowMenu(!showMenu)}
              activeClass={menuStyle.active}
              to="Home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </li>

          <li className={menuStyle.list}>
            <Link
              onClick={() => setShowMenu(!showMenu)}
              activeClass={menuStyle.active}
              to="About"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </Link>
          </li>

          <li className={menuStyle.list}>
            <Link
              onClick={() => setShowMenu(!showMenu)}
              activeClass={menuStyle.active}
              to="Resume"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Resume
            </Link>
          </li>

          <li className={menuStyle.list}>
            <Link
              onClick={() => setShowMenu(!showMenu)}
              activeClass={menuStyle.active}
              to="Portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Portfolio
            </Link>
          </li>

          <li className={menuStyle.list}>
            <Link
              onClick={() => setShowMenu(!showMenu)}
              activeClass={menuStyle.active}
              to="Contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
