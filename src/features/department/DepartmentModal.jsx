import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"


export function DepartmentModal({ onAdd, onClose, onData, onUpdate }) {

    const [newDepartment, setNewDepartment] = useState({
        name: "",
        companyId: ""
    })
    useEffect(() => {
        if (onData) {
            setNewDepartment({
                id: onData.id,
                name: onData.name,
                companyId: onData.companyId
            })
        }
    },[onData])

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Add</h2>
<input
  value={newDepartment.name}
  type="text"
  placeholder="name"
  name="name"
  onChange={(e) =>
    setNewDepartment({
      ...newDepartment,
      name: e.target.value
    })
  }
/>

<input
  value={newDepartment.companyId}
  type="text"
  placeholder="company"
  name="companyId"
  onChange={(e) =>
    setNewDepartment({
      ...newDepartment,
      companyId: e.target.value
    })
  }
/>

                <div className="modal-buttons">
                    <button onClick={() => { onData ? onUpdate(newDepartment) : onAdd(newDepartment) }}>Save</button>
                    <button onClick={onClose}>Close</button>
                </div>

            </div>
        </div>


    )
}
