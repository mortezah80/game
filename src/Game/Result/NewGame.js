import React,{useState} from 'react'
import './NewGame.css'
import ItemsCarousel from 'react-items-carousel';
import Image1 from '../../1.jpg'
import Image2 from '../../2.jpg'
import Image3 from '../../3.jpg'
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
import CardDestails from './CardDestails';

function NewGame() {
    let cards = [
        {
            image:Image1,
            p1:20,
            p2:66,
            p3:42,
            p4:70,
        },
        {
            image:Image2,
            p1:50,
            p2:33,
            p3:72,
            p4:20,
        },
        {
            image:Image3,
            p1:80,
            p2:10,
            p3:34,
            p4:65,
        }
    ]
    const [activeItemIndex , setactiveItemIndex] = useState(0);
    const [progress,setProgress] = useState(0);
    const [Select , setSelect] = useState(false);
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
        <div>
            { !Select? <div className="NewGame">
                <div className="NewGameTop">
                    <div className="NewGameSlider">
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
                            <img className="NewGameImage" alt="" src={Image1} />
                            <img className="NewGameImage" alt="" src={Image2} />
                            <img className="NewGameImage" alt="" src={Image3} />
                        </ItemsCarousel>


                    </div>
                    <div className="BuyCards_CardDetails">
                        <CardDestails progress={progress} Property="property1" card={cards[progress].p1}/>
                        <CardDestails progress={progress} Property="property2" card={cards[progress].p2}/>
                        <CardDestails progress={progress} Property="property3" card={cards[progress].p3}/>
                        <CardDestails progress={progress} Property="property4" card={cards[progress].p4}/>
                    </div>
                </div>


                <div className="NewGame_CarouselButtons">
                    <BsArrowLeftCircle onClick={handleleft} className="NewGame_CarouselButton"/>
                    <BsArrowRightCircle onClick={handleright} className="NewGame_CarouselButton"/>
                </div>
                <div className="NewGameFooter">
                    <span className="NewGamePlayerName">Player Name</span>
                    <button className="NewGameSelect" onClick={() => setSelect(true)}>Select</button>
                </div>
            </div>
            :
            <div className="NewGameResult">
                <div className="NewGameResultCards">
                    <div>
                        <img className="MyCardsImage" alt="" src={cards[progress].image} />
                        <div className="NewGameResult_CardDetails">
                                <CardDestails margin="20px auto" Barheight="19px" width="290px" fontSize="14px"  Property="property1" card={cards[progress].p1}/>
                                <CardDestails margin="20px auto" Barheight="19px" width="290px" fontSize="14px"  Property="property2" card={cards[progress].p2}/>
                                <CardDestails margin="20px auto" Barheight="19px" width="290px" fontSize="14px"  Property="property3" card={cards[progress].p3}/>
                                <CardDestails margin="20px auto" Barheight="19px" width="290px" fontSize="14px"  Property="property4" card={cards[progress].p4}/>
                        </div>
                    </div>
                    <div>
                        <img className="MyCardsImage" alt="" src={Image3} />
                        <div className="NewGameResult_CardDetails">
                                <CardDestails margin="20px auto" Barheight="19px" width="290px" fontSize="14px"  Property="property1" card={cards[2].p1}/>
                                <CardDestails margin="20px auto" Barheight="19px" width="290px" fontSize="14px"  Property="property2" card={cards[2].p2}/>
                                <CardDestails margin="20px auto" Barheight="19px" width="290px" fontSize="14px"  Property="property3" card={cards[2].p3}/>
                                <CardDestails margin="20px auto" Barheight="19px" width="290px" fontSize="14px"  Property="property4" card={cards[2].p4}/>
                        </div>
                    </div>
                </div>
                <div>
                <div className="NewGameResultFooter">
                    <span className="NewGamePlayerName NewGameFooterButton">Player Name</span>
                    <button className="NewGameSelect NewGameFooterButton">Fight</button>
                    <span className="NewGamePlayerName NewGameFooterButton">Player Name</span>
                </div>
                </div>

            </div>
            }
        </div>
    )
}

export default NewGame
