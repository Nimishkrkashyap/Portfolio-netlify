import React from 'react'
import resumeStyle from './Resume.module.css'
import Card from './Card/Card'

const Resume = () => {
    return (
        <>
            <div className={resumeStyle.container}>
                <h3 className={resumeStyle.heading}>Resume</h3>
                <h4 className={resumeStyle.sub_heading}>More of my credentials.</h4>
                <p className={resumeStyle.para}>Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>
                <h3 className={resumeStyle.heading_secondary}>Work Experience</h3>
                <Card />
                <Card />
                <Card />
                <h3 className={resumeStyle.heading_secondary}>Education</h3>
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default Resume
