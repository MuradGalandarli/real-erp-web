import { useEffect, useState } from "react"

export function BrandModal({ onAdd, onClose, onBrand }) {

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
                <input type="text" onChange={(e) => { setData(prev => ({ ...prev, companyId: e.target.value })) }} placeholder="company" value={data.companyId} />
                <div>
                    <button onClick={() => { onAdd(data), console.log(data) }}>Save</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>


        </div>


    )

}