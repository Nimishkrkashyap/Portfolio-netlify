import React from "react";
import portfoliStyle from "./Portfolio.module.css";
import Card from "./Card/Card";

const Portfolio = () => {
  return (
    <>
      <div className={portfoliStyle.container}>
        <h3 className={portfoliStyle.heading}>Portfolio</h3>
        <h4 className={portfoliStyle.sub_heading}>
          Check out some of my works.
        </h4>
        <div className={portfoliStyle.buttons}>
          <button className={portfoliStyle.btn}>All</button>
          <button className={portfoliStyle.btn}>React.Js</button>
          <button className={portfoliStyle.btn}>btn</button>
          <button className={portfoliStyle.btn}>btn</button>
        </div>
        <div className={portfoliStyle.card_container}>
        <Card />
        <Card />
        <Card />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
