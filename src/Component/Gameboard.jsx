import { useState } from "react"

const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function Gameboard({ onSelect, turns }) {
    let gameboard = initialGameboard

        for (const turn of turns){
            const {square , player} = turn ;
            const {row , col} = square ;

            gameboard[row][col] = player
        }

    return (
        <ol id="game-board">
            {initialGameboard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) => <li key={colIndex}><button onClick={()=>onSelect(rowIndex , colIndex)}>{col}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}