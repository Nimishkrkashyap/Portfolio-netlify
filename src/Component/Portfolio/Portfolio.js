import React, {useState} from "react";
import portfoliStyle from "./Portfolio.module.css";
import Card from "./Card/Card";
import PortfolioData from "./PortfolioData"

const Portfolio = () => {

  const [item, setItem] = useState(PortfolioData.filter((elem) =>{
    return elem.category === "All";
  }));

  const filterItem = (categElem) => {
    const updatedItems = PortfolioData.filter((elem) => {
      return elem.category === categElem;
    })
    setItem(updatedItems);
  };

  return (
    <>
      <div className={portfoliStyle.container} id="Portfolio">
        <h3 className={portfoliStyle.heading}>Portfolio</h3>
        <h4 className={portfoliStyle.sub_heading}>
          Check out some of my works.
        </h4>
        <div className={portfoliStyle.buttons}>
          <button className={portfoliStyle.btn} onClick={() => filterItem("All")}>All</button>
          <button className={portfoliStyle.btn} onClick={() => filterItem("react")}>React.Js</button>
          <button className={portfoliStyle.btn} onClick={() => filterItem("html")}>HTML,CSS</button>
        </div>
        <div className={portfoliStyle.card_container}>
        
        {item.map((val,index) => {
          return <Card 
          key={index}
            ImgSrc={val.img}
            Heading={val.heading}
            Link={val.link}
          />
        })}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
