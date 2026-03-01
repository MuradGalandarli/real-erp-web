import { useEffect, useState } from "react"


export function WarehouseModal({ onClose, onAdd, data }) {

    const [formData, setFormData] = useState({
        "name": "",
        "description": "",
        "location": "",
        "companyId": ""
    });

    useEffect(
        () => {
            if (data)
                setFormData({
                    "id": data.id,
                    "name": data.name,
                    "description": data.description,
                    "location": data.location,
                    "companyId": data.companyId
                })
        }, [data])

    return (
        <div className="modal-overlay">

            <div className="modal">
                <h2>Add</h2>
                <input value={formData.name} placeholder="name" onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} />
                <input value={formData.description} placeholder="description" onChange={(e) => { setFormData({ ...formData, description: e.target.value }) }} />
                <input value={formData.location} placeholder="location" onChange={(e) => { setFormData({ ...formData, location: e.target.value }) }} />
                <input value={formData.companyId} placeholder="company" onChange={(e) => { setFormData({ ...formData, companyId: e.target.value }) }} />

                <div>
                    <button onClick={() => { onAdd(formData) }}>Save</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}