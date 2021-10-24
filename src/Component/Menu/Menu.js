import React, { useState } from "react";
import menuStyle from "./Menu.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {AiOutlineClose} from 'react-icons/ai'

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navStyle = showMenu ? menuStyle.links_show : menuStyle.links_hide;
  return (
    <>
      <div className={menuStyle.container}>
        <div className={menuStyle.nav}>
          <div className={menuStyle.hamburgur}  onClick={() => setShowMenu(!showMenu)}>
          {showMenu  ? <AiOutlineClose className={menuStyle.icon}/>: <GiHamburgerMenu className={menuStyle.icon}/>} 
          </div>
          <div className={menuStyle.navName}>
            <h3 className={menuStyle.heading}>Menu</h3>
          </div>
        </div>
        <div className={navStyle}>
          <ul className={menuStyle.list_parent}>
            <li className={menuStyle.list}>Home</li>
            <li className={menuStyle.list}>Aboute</li>
            <li className={menuStyle.list}>Resume</li>
            <li className={menuStyle.list}>Portfolio</li>
            <li className={menuStyle.list}>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
