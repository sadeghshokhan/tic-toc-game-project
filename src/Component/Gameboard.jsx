const initialGameboard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

export default function Gameboard(){
    return (
        <ol id="game-board">
            {initialGameboard.map((row,rowIndex)=> <li key={rowIndex}>
                <ol>
                {row.map((col,colIndex)=> <li key={colIndex}><button>{col}</button></li>)}
                </ol>
                </li>)}
        </ol>
    )
}