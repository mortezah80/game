import React , {useState} from 'react'
import './MintCards.css'
function MintCards() {

    const [card , SetCard] = useState ({
        p1:null,
        p2:null,
        p3:null,
        p4:null,
        price:null
    })
    const [ImageSrc , setImageSrc] = useState("");
    const [Edit , setEdit] =useState ({
        p1:true,
        p2:true,
        p3:true,
        p4:true,
        price:true,
    })
    const handleInputChange = (e,number) => {
        if(e.target.value>100){
            return;
        }
        if (number===1) {
            SetCard({...card ,p1:e.target.value})
        }
        else if (number===2) {
            SetCard({...card ,p2:e.target.value})
        }
        else if (number===3) {
            SetCard({...card ,p3:e.target.value})
        }
        else if (number===4) {
            SetCard({...card ,p4:e.target.value})
        }
        else {
            return
        }
    }
    const handleEnter = (e,number)=> {
        if (e.key==="Enter") {
            if (number===1) {
                setEdit({...Edit ,p1:false})
            }
            else if (number===2) {
                setEdit({...Edit ,p2:false})
            }
            else if (number===3) {
                setEdit({...Edit ,p3:false})
            }
            else if (number===4) {
                setEdit({...Edit ,p4:false})
            }
        }

    }
    const handleProgressClick = (number) => {
        if (number===1) {
            setEdit({...Edit ,p1:true})
        }
        else if (number===2) {
            setEdit({...Edit ,p2:true})
        }
        else if (number===3) {
            setEdit({...Edit ,p3:true})
        }
        else if (number===4) {
            setEdit({...Edit ,p4:true})
        }
    }
    const handlePriceChange = (e) => {
        SetCard({...card , price:e.target.value})
    }
    const handlePriceEnter = (e) => {
        if (e.key==="Enter") {
            setEdit({...Edit ,price:false})
        }

    }
    const handlePriceClick = () => {
        setEdit({...Edit ,price:true})
    }
    return (
        <div className="MintCards">
            <div className="MintCardsSlider">
                {ImageSrc ? <img className="BuyCardImage" alt="" src={ImageSrc} /> :
                <div className="waitforimage">
                <input className="imageInput" id="Imageinput" type="file" onChange = {(e) => setImageSrc(URL.createObjectURL(e.target.files[0]))} />
                <label className="ImageInputLabel" htmlFor="Imageinput">Choose An image</label>
                </div>
            
                }
                <button className="MintButton" > Do Mint</button>
            </div>

           {
            <div className="BuyCards_CardDetails">
                <div className="container2">

                    {!Edit.p1? 
                    <>
                    <span className="Buycard_ProgressSpan">Property 1</span>
                    <div onClick={() => handleProgressClick(1) } className="ProgressContainer hovercursor">
                        <div className="progressbar-container">
                        <div className="progressbar-complete" style={{width: `${card.p1}%`}}>
                            <div className="progressbar-liquid"></div>
                        </div>
                        <span className="progress">{card.p1}%</span>
                        </div>
                    </div>
                    </>
                    :
                    <div className="input-container">
                        <input value={card.p1} onChange={(e) => handleInputChange(e,1)} onKeyDown={(e) => handleEnter(e,1)} type="number" required=""/>
                        <label>Property 1</label>		
                    </div>
                    }

                </div>
                <div className="container2">

                    {!Edit.p2? 
                    <>
                    <span className="Buycard_ProgressSpan">Property 2</span>
                    <div onClick={() => handleProgressClick(2) } className="ProgressContainer hovercursor">
                        <div className="progressbar-container">
                        <div className="progressbar-complete" style={{width: `${card.p2}%`}}>
                            <div className="progressbar-liquid"></div>
                        </div>
                        <span className="progress">{card.p2}%</span>
                        </div>
                    </div>
                    </>
                    :
                    <div className="input-container">
                        <input value={card.p2} onChange={(e) => handleInputChange(e,2)} onKeyDown={(e) => handleEnter(e,2)}  type="text" required=""/>
                        <label>Property 2</label>		
                    </div>
                    }
                </div>
                <div className="container2">
                    {!Edit.p3?
                    <>
                    <span className="Buycard_ProgressSpan">Property 3</span>
                    <div onClick={() => handleProgressClick(3) } className="ProgressContainer hovercursor">
                        <div className="progressbar-container">
                        <div className="progressbar-complete" style={{width: `${card.p3}%`}}>
                            <div className="progressbar-liquid"></div>
                        </div>
                        <span className="progress">{card.p3}%</span>
                        </div>
                    </div>
                    </>
                    :
                    <div className="input-container">
                        <input value={card.p3} onChange={(e) => handleInputChange(e,3)}  onKeyDown={(e) => handleEnter(e,3)} type="text" required=""/>
                        <label>Property 3</label>		
                    </div>
                    }
                </div>
                <div className="container2">
                    {!Edit.p4?
                    <>
                    <span className="Buycard_ProgressSpan">Property 4</span>
                    <div onClick={() => handleProgressClick(4) } className="ProgressContainer hovercursor">
                        <div className="progressbar-container">
                        <div className="progressbar-complete" style={{width: `${card.p4}%`}}>
                            <div className="progressbar-liquid"></div>
                        </div>
                        <span  className="progress">{card.p4}%</span>
                        </div>
                    </div>
                    </>
                    :
                    <div className="input-container">
                        <input value={card.p4} onChange={(e) => handleInputChange(e,4)}  onKeyDown={(e) => handleEnter(e,4)} type="text" required=""/>
                        <label>Property 4</label>		
                    </div>
                    }
                </div>

                <div className="Price">
                    <span>Price :</span>
                    {!Edit.price?
                    <>
                    <span onClick={handlePriceClick} className="PriceNumber hovercursor">{card.price}$</span>
                    </>
                    :
                    <div className="input-container priceContainer">
                        <input value={card.price} onChange={(e) => handlePriceChange(e)} onKeyDown={(e) => handlePriceEnter(e)} type="text" required=""/>
                        <label>Price</label>		
                    </div>
                    }
                </div>
            </div>
            }
        </div>
    )
}

export default MintCards
