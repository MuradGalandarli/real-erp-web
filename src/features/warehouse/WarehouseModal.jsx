import { useState } from "react"


export function WarehouseModal({ onClose, onAdd }) {

    const [formData, setFormData] = useState({
        "name": "",
        "description": "",
        "location": "",
        "companyId": ""
    });
    return (
        <div className="modal-overlay">
            
            <div className="modal">
                <h2>Add</h2>
                <input placeholder="name" onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} />
                <input placeholder="description" onChange={(e) => { setFormData({ ...formData, description: e.target.value }) }} />
                <input placeholder="location" onChange={(e) => { setFormData({ ...formData, location: e.target.value }) }} />
                <input placeholder="company" onChange={(e) => { setFormData({ ...formData, companyId: e.target.value }) }} />

                <div>
                    <button onClick={() => {onAdd(formData) }}>Save</button>
                    <button onClick={ onClose }>Close</button>
                </div>
            </div>
        </div>
    )
}