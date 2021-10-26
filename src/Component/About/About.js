import React from "react";
import aboutStyle from "./About.module.css";
import img from "../images/nimish.jpg";
import { FaReact, FaHtml5, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { SiMaterialui } from "react-icons/si";

const About = () => {
  return (
    <>
      <div className={aboutStyle.container}>
        <div className={aboutStyle.main_section}>
          <h3 className={aboutStyle.heading}>About</h3>
          <h1 className={aboutStyle.sub_heading}>Let me introduce myself.</h1>
          <div className={aboutStyle.intro}>
            <img src={img} alt="img" className={aboutStyle.image} />
            <p className={aboutStyle.para}>
              Lorem ipsum Exercitation culpa qui dolor consequat exercitation
              fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure
              sunt id pariatur Duis laboris amet exercitation veniam labore
              consectetur ea id quis eiusmod.
            </p>
          </div>
        </div>
        <div className={aboutStyle.description}>
          <div className={aboutStyle.profile}>
            <h2 className={aboutStyle.heading}>Profile</h2>
            <p className={aboutStyle.para}>Basic details about me.</p>
            <ul>
              <li className={aboutStyle.heading_secondary}>Fullname:</li>
              <li className={aboutStyle.sub_heading}>Nimish Kumar</li>
              <li className={aboutStyle.heading_secondary}>Birth Date:</li>
              <li className={aboutStyle.sub_heading}>06/09/1998</li>
              <li className={aboutStyle.heading_secondary}>Post:</li>
              <li className={aboutStyle.sub_heading}>Frontend Developer</li>
              <li className={aboutStyle.heading_secondary}>Website:</li>
              <li className={aboutStyle.sub_heading}>www.nimish.tk</li>
              <li className={aboutStyle.heading_secondary}>Email:</li>
              <li className={aboutStyle.sub_heading}>
                nimishkumar9534@gmail.com
              </li>
            </ul>
          </div>
          <div className={aboutStyle.skills}>
            <h2 className={aboutStyle.heading}>Skills</h2>
            <p className={aboutStyle.para}>What I can do.</p>
            <ul>
              <li className={aboutStyle.icon_parent}>
                <FaReact className={aboutStyle.icon} />
                <h4 className={aboutStyle.skill}>React.Js</h4>
              </li>

              <li className={aboutStyle.icon_parent}>
                <IoLogoJavascript className={aboutStyle.icon} />
                <h4 className={aboutStyle.skill}>Javascript</h4>
              </li>

              <li className={aboutStyle.icon_parent}>
                <FaHtml5 className={aboutStyle.icon} />
                <h4 className={aboutStyle.skill}>HTML</h4>
              </li>

              <li className={aboutStyle.icon_parent}>
                <IoLogoCss3 className={aboutStyle.icon} />
                <h4 className={aboutStyle.skill}>CSS</h4>
              </li>

              <li className={aboutStyle.icon_parent}>
                <FaBootstrap className={aboutStyle.icon} />
                <h4 className={aboutStyle.skill}>Bootstrap</h4>
              </li>

              <li className={aboutStyle.icon_parent}>
                <SiMaterialui className={aboutStyle.icon} />
                <h4 className={aboutStyle.skill}>Material-UI</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
