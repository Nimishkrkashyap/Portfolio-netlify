import React from "react";
import cardStyle from "./Card.module.css";
import { FaGraduationCap } from "react-icons/fa";

const Card = () => {
  return (
    <>
      <div className={cardStyle.container}>

        <div className={cardStyle.left}>
          <h1 className={cardStyle.heading}>UI Designer</h1>
          <h3 className={cardStyle.sub_heading}>July 2015 - Present</h3>
        </div>

        <div className={cardStyle.dark_line_mobile}></div>

        <div className={cardStyle.center}>
          <div className={cardStyle.icon_parent}>
            <FaGraduationCap className={cardStyle.icon} />
          </div>
          <div className={cardStyle.light_line}></div>
        </div>
        
        <div className={cardStyle.right}>
          <h1 className={cardStyle.heading}>Awesome Studio</h1>
          <div className={cardStyle.dark_line_desktop}></div>
          <p className={cardStyle.para}>
            Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
            consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
            quis velit esse sed Ut proident cupidatat nulla esse cillum laborum
            occaecat nostrud sit dolor incididunt amet est occaecat nisi.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
