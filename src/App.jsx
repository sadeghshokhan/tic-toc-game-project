import { useState } from "react"
import Gameboard from "./Component/Gameboard"
import Player from "./Component/Player"


function App() {
const [activePlayer , setActivePlayer] = useState("X");
const[gameTurns , setGameTurns] = useState([])

function handleChangeSymbol(rowIndex , colIndex){
  setActivePlayer(prevState => prevState==="X" ? "O" : "X")
  setGameTurns(prevTurn=> {
    let currentPlayer = "X"

    if(prevTurn.length > 0 && prevTurn[0].player === "X"){
      currentPlayer = "O"
    }

    const updateTurn = [{square: {row :rowIndex , col: colIndex} , player:currentPlayer}, ...prevTurn]

    return updateTurn
  })
}

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer==="X"}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer==="O"}/>
        </ol>
        <Gameboard onSelect={handleChangeSymbol} activeSymbol={activePlayer} turns={gameTurns}/>
      </div>
      LOG
    </>
  )
}

export default App
