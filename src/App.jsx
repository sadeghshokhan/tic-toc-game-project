import { useState } from "react"
import Gameboard from "./Component/Gameboard"
import Player from "./Component/Player"
import Log from "./Component/Log.jsx"
import { WINNING_COMBINATIONS } from "./winning-combinations.js"
import GameOver from "./Component/GameOver.jsx"


//________________gameBoard__________
const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
//|______________________________________________|

//************************************************

//________________compute activePlayer__________
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X"

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O"
  }

  return currentPlayer
}
//|______________________________________________|



function App() {
  // const [activePlayer , setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([])
  const [player , setPlayerName] = useState({
    "X" : "player name 1 ",
    "O" : "player name 2 "
  })

  const activePlayer = deriveActivePlayer(gameTurns)

  let gameboard = [...initialGameboard.map(board => [...board])]

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameboard[row][col] = player
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameboard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameboard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameboard[combination[2].row][combination[2].column];

    if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
      ){
        winner =  player[firstSquareSymbol];
      }
    }

    const hasdraw = gameTurns.length === 9 && !winner;


  function handleChangeSymbol(rowIndex, colIndex) {
    // setActivePlayer(prevState => prevState==="X" ? "O" : "X")
    setGameTurns(prevTurn => {
      const currentPlayer = deriveActivePlayer(prevTurn)

      const updateTurn = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurn]

      return updateTurn
    })
  }

  function handleRestart(){
    setGameTurns([])
  }

  function handlePlayerNameChange(symbol,newName){
      setPlayerName(prevPlayer => {
        return {
          ...prevPlayer,
          [symbol]:[newName]
        }
      })
    
  }

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} onHnandleChangeName={handlePlayerNameChange} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} onHnandleChangeName={handlePlayerNameChange} />
        </ol>
        {(winner || hasdraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <Gameboard onSelect={handleChangeSymbol} activeSymbol={activePlayer} board={gameboard} />
      </div>
      <Log turns={gameTurns} />
    </>
  )
}

export default App
