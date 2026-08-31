import { useState } from "react"


export default function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName , setPlayerName] = useState(initialName)

    let editablePlayerName = <span className="player-name">{playerName}</span>

    function handleEditBtn() {
        setIsEditing((editing) => !editing)
    }

    function handlechange(e){
        setPlayerName(e.target.value)
    }

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handlechange} />
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditBtn}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}