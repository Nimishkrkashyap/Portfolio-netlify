import React from "react";
import homeStyle from "./Home.module.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Menu from "../Menu/Menu";

const Home = () => {
  return (
    <>
      <div className={homeStyle.container}>
        <div className={homeStyle.overlay}>
          <Menu />
          <div className={homeStyle.content}>
            <h5 className={homeStyle.heading}>hello, World</h5>
            <h1 className={homeStyle.sub_heading}>I'm Nimish Kumar</h1>
            <p className={homeStyle.para}>Front-end Developer</p>
            <button className={homeStyle.btn}>More about me</button>
          </div>
          <div className={homeStyle.links}>
            <a href="https://www.instagram.com/nimish_kumar_kashyap/" target="_blank" rel="noopener noreferrer"><FaInstagram  className={homeStyle.icon}/></a>
            <a href="https://www.linkedin.com/in/nimish-kumar-9304b41a0/" target="_blank" rel="noopener noreferrer" ><FaLinkedin className={homeStyle.icon} /></a>
            <a href="https://github.com/Nimishkrkashyap" target="_blank" rel="noopener noreferrer"><FaGithub className={homeStyle.icon} /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
