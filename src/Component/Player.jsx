import { useState } from "react"


export default function Player({name , symbol}){
const[isEditing , setIsEditing]=useState(false);

let playerName = <span className="player-name">{name}</span>

function handleEditBtn(){
    setIsEditing(true)
}

if(isEditing){
playerName = <input type="text" required />
}

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">symbol{symbol}</span>
            </span>
            <button onClick={handleEditBtn}>Edit</button>
        </li>
    )
}