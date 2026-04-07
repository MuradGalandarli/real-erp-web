import { useEffect, useState } from "react"

export function RoleModal({ onRole, onClose, oldRole }) {

    const [newRole, setNewRole] = useState({
        name: ""
    });

    useEffect(

        () => {
            if (oldRole) {
                setNewRole({
                    id: oldRole.id,
                    name:  oldRole.name
                })
            }
        },
        [oldRole]

    )

    return (

        <div className="modal-overlay">
            <div className="modal">
                <h3>{oldRole? "Update" : "Add" }</h3>
                <input type="text"
                 onChange={(e) => { setNewRole({ ...newRole, name: e.target.value }) }}
                 value={newRole.name}
                 />

                <div>
                    <button onClick={() => { onRole(newRole) }}>Save</button>
                    <button onClick={onClose}>Close</button>

                </div>
            </div>
        </div>
    )
}