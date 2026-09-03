import { useState } from "react"

const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function Gameboard({onSelect}) {
    // const [gameboard, setGameboard] = useState(initialGameboard)

    // function handleSelectSqure(rowIndex, colIndex) {
    //     setGameboard((prevGameboard) => {
    //         const updateBoard = [...prevGameboard.map(innerArray => [...innerArray])];
    //         updateBoard[rowIndex][colIndex] = activeSymbol;
    //         return updateBoard
    //     });
    //     onSelect()
    // }


    return (
        <ol id="game-board">
            {initialGameboard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) => <li key={colIndex}><button onClick={onSelect}>{col}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}