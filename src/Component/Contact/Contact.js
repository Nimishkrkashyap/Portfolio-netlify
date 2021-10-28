import React from "react";
import contactStyle from "./Contact.module.css";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { FaRegCopyright, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className={contactStyle.container}>
        <h3 className={contactStyle.heading}>Contact Us</h3>
        <h4 className={contactStyle.sub_heading}>I'd Love To Hear From You.</h4>
        <div className={contactStyle.bottom}>
          <div className={contactStyle.left}>
            <GoLocation className={contactStyle.icon} />
            <h3
              className={`${contactStyle.heading} ${contactStyle.heading_main}`}
            >
              Where to find me
            </h3>
            <h4 className={contactStyle.heading_secondary}>Bhopal(Piplani)</h4>
          </div>
          <div className={contactStyle.center}>
            <HiOutlineMail className={contactStyle.icon} />
            <h3
              className={`${contactStyle.heading} ${contactStyle.heading_main}`}
            >
              Email me at
            </h3>
            <h4 className={contactStyle.heading_secondary}>
              nimishkumar9534@gmail.com
            </h4>
          </div>

          <div className={contactStyle.right}>
            <IoCallOutline className={contactStyle.icon} />
            <h3
              className={`${contactStyle.heading} ${contactStyle.heading_main}`}
            >
              Call me at
            </h3>
            <h4 className={contactStyle.heading_secondary}>9304430660</h4>
            <h4 className={contactStyle.heading_secondary}>9534783952</h4>
          </div>
        </div>
      </div>
      <div className={contactStyle.bootom_section}>
        <div className={contactStyle.copyright}>
          <FaRegCopyright className={contactStyle.copyright_icon} />
          <span className={contactStyle.copyright_line}>
            Copyright portfolio 2021 | Developed by Nimish Kumar
          </span>
        </div>
        <div className={contactStyle.links}>
        <a href="https://www.instagram.com/nimish_kumar_kashyap/" target="_blank" rel="noopener noreferrer"><FaInstagram  className={contactStyle.icon}/></a>
            <a href="https://www.linkedin.com/in/nimish-kumar-9304b41a0/" target="_blank" rel="noopener noreferrer" ><FaLinkedin className={contactStyle.icon} /></a>
            <a href="https://github.com/Nimishkrkashyap" target="_blank" rel="noopener noreferrer"><FaGithub className={contactStyle.icon} /></a>
          </div>
      </div>
    </>
  );
};

export default Contact;
