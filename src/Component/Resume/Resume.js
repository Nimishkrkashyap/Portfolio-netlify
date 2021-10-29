import React from "react";
import resumeStyle from "./Resume.module.css";
import Card from "./Card/Card";
import { ResumeData } from "./ResumeData";

const Resume = () => {
  return (
    <>
      <div className={resumeStyle.container} id="Resume">
        <h3 className={resumeStyle.heading}>Resume</h3>
        <h4 className={resumeStyle.sub_heading}>More of my credentials.</h4>
        <p className={resumeStyle.para}>
          The more we give importance to skill developement, <br />
          The more competent will be our growth
        </p>

        <h3 className={resumeStyle.heading_secondary}>Education</h3>
        {ResumeData.map((val, index) => {
          return (
            <Card
              key={index}
              Title={val.title}
              Year={val.year}
              Title_Two={val.title_two}
              Details={val.details}
            />
          );
        })}
      </div>
    </>
  );
};

export default Resume;
