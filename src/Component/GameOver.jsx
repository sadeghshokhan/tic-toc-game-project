export default function GameOver({winner}) {
    return (
        <div id="game-over">
            <h2>game is over</h2>
                {winner && <p>{winner} won!</p>}
                {!winner && <p>has draw</p>}
            <p><button>rematch</button></p>
        </div>

    )

}