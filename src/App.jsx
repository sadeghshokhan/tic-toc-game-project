import { useState } from "react"
import Gameboard from "./Component/Gameboard"
import Player from "./Component/Player"
import Log from "./Component/Log.jsx"


//________________compute activePlayer__________
function deriveActivePlayer(gameTurns){
    let currentPlayer = "X"

    if(gameTurns.length > 0 && gameTurns[0].player === "X"){
      currentPlayer = "O"
    }

return currentPlayer
}      
//|______________________________________________|


function App() {
// const [activePlayer , setActivePlayer] = useState("X");
const[gameTurns , setGameTurns] = useState([])

const activePlayer = deriveActivePlayer(gameTurns)

function handleChangeSymbol(rowIndex , colIndex){
  // setActivePlayer(prevState => prevState==="X" ? "O" : "X")
  setGameTurns(prevTurn=> {
    const currentPlayer = deriveActivePlayer(prevTurn)

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
      <Log turns={gameTurns}/>
    </>
  )
}

export default App
