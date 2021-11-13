import React , {useState} from 'react'
import './Game.css'
import BuyCards from './Result/BuyCards'
import MintCards from './Result/MintCards'
import MyCards from './Result/MyCards'
import NewGame from './Result/NewGame'

function Game() {
    const[ActiveButton ,setActiveButton] = useState(1);
    return (
        <div className="Game">
            <div className="GameButtons">
                <span className="PlayerName">Player Name</span>
                <div onClick={() => setActiveButton(1)} className={["GameButton",ActiveButton===1? "active" : ""].join(" ")}>Buy Cards</div>
                <div onClick={() => setActiveButton(2)} className={["GameButton",ActiveButton===2? "active" : ""].join(" ")}>My Cards</div>
                <div onClick={() => setActiveButton(3)} className={["GameButton",ActiveButton===3? "active" : ""].join(" ")}>New Game</div>
                <div onClick={() => setActiveButton(4)} className={["GameButton",ActiveButton===4? "active" : ""].join(" ")}>Mint Cards</div>
            </div>
            <div className="GameResultContainer">
               {ActiveButton===1 ? <BuyCards/> :
                ActiveButton===2 ? <MyCards/> :
                ActiveButton===3 ? <NewGame/> :
                ActiveButton===4 ? <MintCards/> :
                <p>Error!</p>      
                }
            </div>

        </div>
    )
}

export default Game
