import { useState } from "react"


export default function Player({name}){
const[isEditing , setIsEditing]=useState(false);

let playerName = <span>player {name}</span>

function handleEditBtn(){
    setIsEditing(true)
}

if(isEditing){
playerName = <input type="text" required />
}

    return (
        <li>
            <span>
                {playerName}
                <span>symbol{}</span>
            </span>
            <button onClick={handleEditBtn}>Edit</button>
        </li>
    )
}