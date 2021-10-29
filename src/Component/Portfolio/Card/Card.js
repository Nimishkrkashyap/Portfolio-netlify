import React from 'react'
import cardStyle from './Card.module.css'
import {AiOutlinePlus} from 'react-icons/ai'

const card = ({ImgSrc, Heading, Link}) => {
    return (
        <>
            <div className={cardStyle.container}>
            <img src={ImgSrc} alt="portfolio" className={cardStyle.image}/>
                <div className={cardStyle.description}>
                    <h3 className={cardStyle.heading}>{Heading}</h3>
                    <a href={Link}>
                    <div className={cardStyle.card_parent}>
                    <AiOutlinePlus className={cardStyle.icon}/>
                    </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default card
