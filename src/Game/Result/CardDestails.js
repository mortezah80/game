import React from 'react'

function CardDestails(props) {
    return (
        <div className="container" style={{width:props.width , margin:props.margin}}>
            <span className="NewGameResult_ProgressSpan" style={{fontSize:props.fontSize}}>{props.Property}</span>
            <div className="ProgressContainer">
                <div className="progressbar-container" style={{height:props.Barheight}}>
                <div className="progressbar-complete" style={{width: `${props.card}%`}}>
                    <div className="progressbar-liquid"></div>
                </div>
                <span className="progress">{props.card}%</span>
                </div>
            </div>

        </div>
    )
}

export default CardDestails
