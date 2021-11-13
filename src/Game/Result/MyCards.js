import React from 'react'
import './MyCards.css'
import Image1 from '../../1.jpg'
import Image2 from '../../2.jpg'
import Image3 from '../../3.jpg'

function MyCards() {
    return (
        <div className="MyCards">
            <div className="MyCards_imagecontainer">
                <img className="MyCardsImage" alt="" src={Image1} />
                <img className="MyCardsImage" alt="" src={Image2} />
                <img className="MyCardsImage" alt="" src={Image3} />
                <img className="MyCardsImage" alt="" src={Image1} />
                <img className="MyCardsImage" alt="" src={Image2} />
                <img className="MyCardsImage" alt="" src={Image3} />
                <img className="MyCardsImage" alt=""  src={Image1} />
                <img className="MyCardsImage" alt="" src={Image2} />
            </div>

        </div>
    )
}

export default MyCards
