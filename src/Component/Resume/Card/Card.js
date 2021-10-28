import React from "react";
import cardStyle from "./Card.module.css";
import { FaGraduationCap } from "react-icons/fa";

const Card = ({Title, Year, Title_Two, Details}) => {
  return (
    <>
      <div className={cardStyle.container}>

        <div className={cardStyle.left}>
          <h1 className={cardStyle.heading}>{Title}</h1>
          <h3 className={cardStyle.sub_heading}>{Year}</h3>
        </div>

        <div className={cardStyle.dark_line_mobile}></div>

        <div className={cardStyle.center}>
          <div className={cardStyle.icon_parent}>
            <FaGraduationCap className={cardStyle.icon} />
          </div>
          <div className={cardStyle.light_line}></div>
        </div>
        
        <div className={cardStyle.right}>
          <h1 className={cardStyle.heading}>{Title_Two}</h1>
          <div className={cardStyle.dark_line_desktop}></div>
          <p className={cardStyle.para}>
            {Details}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
