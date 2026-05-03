import { useEffect, useState } from "react"


export function CategoryModal({ onClose, category, onUpdate, onAdd, onCompany }) {

    const [data, setData] = useState({
        id: "",
        name: "",
        description: "",
        companyId: "",
        // companies: []
    })


    useEffect(
        () => {
            if (category)

                setData({
                    "id": category.id,
                    "name": category.name,
                    "description": category.description,
                    "companyId": category.companyId,
                    // "companies": [onCompany]
                })

        }, [category]
    )

    const handleSubmit = () => {
        onUpdate(data);
    }

    const handleAdd = () => {
        onAdd(data)
    }

    return (<div className="modal-overlay">
        <div className="modal">
            <h2>{category ? "Update" : "Add"} </h2>
            <input name="name" placeholder="name" value={data.name} onChange={(e) => { setData({ ...data, name: e.target.value }) }} />
            <input name="description" placeholder="description" value={data.description} onChange={(e) => { setData({ ...data, description: e.target.value }) }} />
            {/* <input name="companyId"
             placeholder="company" 
             value={data.companyId} 
             onChange={(e)=>{setData({...data,companyId: e.target.value})}}
             /> */}
            <tr>
                <select name="company" id=""
                onChange={(e)=>{
                   setData({...data,companyId:e.target.value})
                }}
                // value={onCompany.find(x=>x.id == data.companyId).name}
                  value={data.companyId}
                >

                    <option value="">Sec</option>
                    {
                        onCompany.map((c) => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))
                    }
                </select>
            </tr>
            <div className="modal-buttons">

                <button onClick={category ? handleSubmit : handleAdd}>Save</button>
                <button onClick={onClose}>Cancel</button>

            </div>
        </div>
    </div>
    )
}