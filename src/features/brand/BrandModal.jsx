import { useEffect, useState } from "react"

export function BrandModal({ onAdd, onClose, onBrand,onUpdate, company }) {

    const [data, setData] = useState({
        brandName: "",
        companyId: ""
    });

    useEffect(
        () => {
            if (onBrand) {
                setData({
                    id: onBrand.id,
                    brandName: onBrand.brandName,
                    companyId: onBrand.companyId
})
            }
        },
        [onBrand]
    )


    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>{onBrand ? "Update" : "Add"}</h3>
                <input type="text" onChange={(e) => { setData(prev => ({ ...prev, brandName: e.target.value })) }} placeholder="name" value={data.brandName} />
                {/* <input type="text"
                 onChange={(e) => { setData(prev => ({ ...prev, companyId: e.target.value })) }} 
                 placeholder="company" 
                 value={data.companyId} />
                <div> */}

                <select name="" id=""
             
                 onChange={(e) => setData({ ...data, companyId: e.target.value })}
                >
                    <option value="">Companies</option>
                    {company.map((c)=>(
                        <option value={c.id}>{c.name}</option>
                    ))}
                </select>
                    <button onClick={() => { onBrand ? onUpdate(data): onAdd(data) }}>Save</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>


    )

}