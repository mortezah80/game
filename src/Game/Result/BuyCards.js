import React, {useState} from 'react'
import './BuyCards.css'
import ItemsCarousel from 'react-items-carousel';
import Image1 from '../../1.jpg'
import Image2 from '../../2.jpg'
import Image3 from '../../3.jpg'
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'

function BuyCards() {

    let cards = [
        {
            p1:20,
            p2:66,
            p3:42,
            p4:70,
            price:1240
        },
        {
            p1:50,
            p2:33,
            p3:72,
            p4:20,
            price:3140
        },
        {
            p1:80,
            p2:10,
            p3:34,
            p4:65,
            price:1562
        }
    ]
    const [activeItemIndex , setactiveItemIndex] = useState(0);
    const [progress,setProgress] = useState(0);
    const handleright = () => {
        let temp1 = activeItemIndex+1;
        let temp2;
        if(progress!==2)
        {
            temp2 = progress+1;
        }
        else {
            temp2=0;
        }
        setactiveItemIndex(temp1);
        setProgress(temp2);
        return  
    }
    const handleleft = () => {
        let temp1 = activeItemIndex-1;
        let temp2;
        if(progress!==0)
        {
            temp2 = progress-1;
        }
        else {
            temp2=2;
        }
        setactiveItemIndex(temp1);
        setProgress(temp2);
        return   
    }
    return (
        <div className="BuyCards">
            <div className="BuyCardSlider">
                <ItemsCarousel
                    placeholderItem={<div style={{ height: 200, background: '#EEE' }} />}
                    enablePlaceholder={true}
                    numberOfPlaceholderItems={1}
                    numberOfCards={1}
                    gutter={12}
                    slidesToScroll={1}
                    chevronWidth={60}
                    outsideChevron={true}
                    className="Carousel"
                    classes = {{itemsWrapper:"TopSliderItems"} }
                    showSlither={false}
                    firstAndLastGutter={false}
                    infiniteLoop={true}
                    activeItemIndex={activeItemIndex}
                    requestToChangeActive={setactiveItemIndex}
    
                >
                    <img className="BuyCardImage" alt="" src={Image1} />
                    <img className="BuyCardImage" alt="" src={Image2} />
                    <img className="BuyCardImage" alt="" src={Image3} />
                </ItemsCarousel>
                <div className="BuyCards_CarouselButtons">
                    <BsArrowLeftCircle onClick={handleleft} className="BuyCards_CarouselButton"/>
                    <BsArrowRightCircle onClick={handleright} className="BuyCards_CarouselButton"/>
                </div>

            </div>
            <div className="BuyCards_CardDetails">
                <div className="container">
                    <span className="Buycard_ProgressSpan">Property 1</span>
                    <div className="ProgressContainer">
                        <div className="progressbar-container">
                        <div className="progressbar-complete" style={{width: `${cards[progress].p1}%`}}>
                            <div className="progressbar-liquid"></div>
                        </div>
                        <span className="progress">{cards[progress].p1}%</span>
                        </div>
                    </div>

                </div>
                <div className="container">
                    <span className="Buycard_ProgressSpan">Property 2</span>
                        <div className="ProgressContainer">
                        <div className="progressbar-container">
                        <div className="progressbar-complete" style={{width: `${cards[progress].p2}%`}}>
                            <div className="progressbar-liquid"></div>
                        </div>
                        <span className="progress">{cards[progress].p2}%</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <span className="Buycard_ProgressSpan">Property 3</span>
                    <div className="ProgressContainer">
                        <div className="progressbar-container">
                        <div className="progressbar-complete" style={{width: `${cards[progress].p3}%`}}>
                            <div className="progressbar-liquid"></div>
                        </div>
                        <span className="progress">{cards[progress].p3}%</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <span className="Buycard_ProgressSpan">Property 4</span>
                    <div className="ProgressContainer">
                        <div className="progressbar-container">
                        <div className="progressbar-complete" style={{width: `${cards[progress].p4}%`}}>
                            <div className="progressbar-liquid"></div>
                        </div>
                        <span className="progress">{cards[progress].p4}%</span>
                        </div>
                    </div>
                </div>
                <div className="Price">
                    <span>Price :</span>
                    <span className="PriceNumber">{cards[progress].price}$</span>
                </div>
            </div>
        </div>
    )
}

export default BuyCards
