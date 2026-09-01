import { useState } from "react"
import Gameboard from "./Component/Gameboard"
import Player from "./Component/Player"


function App() {
const [activePlayer , setActivePlayer] = useState("X");

function handleChangeSymbol(){
  setActivePlayer(prevState => prevState==="X" ? "O" : "X")
}

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer==="X"}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer==="O"}/>
        </ol>
        <Gameboard onSelect={handleChangeSymbol} activeSymbol={activePlayer}/>
      </div>
      LOG
    </>
  )
}

export default App
