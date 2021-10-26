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
            <a href="https://www.instagram.com/nimish_kumar_kashyap/"><FaInstagram className={homeStyle.icon} /></a>
            <FaLinkedin className={homeStyle.icon} />
            <FaGithub className={homeStyle.icon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
