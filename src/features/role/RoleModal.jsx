import { useState } from "react"

export function RoleModal({onRole, onClose}) {

    const [newRole, setNewRole] = useState({
        name: ""
    });

    return (

        <div className="modal-overlay">
            <div className="modal">
                <h3>Add</h3>
                <input type="text" onChange={(e) => {setNewRole({ ...newRole, name: e.target.value }) }} />

                <div>
                    <button onClick={()=>{onRole(newRole)}}>Save</button>
                    <button onClick={onClose}>Close</button>

                </div>
            </div>
        </div>
    )
}