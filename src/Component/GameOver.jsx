export default function GameOver({winner, onRestart}) {
    return (
        <div id="game-over">
            <h2>game is over</h2>
                {winner && <p>{winner} won!</p>}
                {!winner && <p>has draw</p>}
            <p><button onClick={onRestart}>rematch</button></p>
        </div>

    )

}