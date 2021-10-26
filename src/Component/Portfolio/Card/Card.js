import React from 'react'
import cardStyle from './Card.module.css'
import {AiOutlinePlus} from 'react-icons/ai'
import img from '../../images/portfolio/brochure.PNG'

const card = () => {
    return (
        <>
            <div className={cardStyle.container}>
            <img src={img} alt="portfolio" className={cardStyle.image}/>
                <div className={cardStyle.description}>
                    <h3 className={cardStyle.heading}>javacript quiz game</h3>
                    <div className={cardStyle.card_parent}>
                    <AiOutlinePlus className={cardStyle.icon}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default card
