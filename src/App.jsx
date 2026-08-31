import Gameboard from "./Component/Gameboard"
import Player from "./Component/Player"


function App() {


  return (
    <>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <Gameboard/>
      </div>
      LOG
    </>
  )
}

export default App
