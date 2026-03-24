import { useState } from "react"

export function BrandModal({onAdd, onClose}) {


    const [data, setData] = useState({
        brandName: "",
        companyId: ""
    });

    return (
        <div className="modal-overlay">
            <div className="modal">
                <input type="text" onChange={(e)=>{setData(prev=>({ ...prev, brandName : e.target.value}))}} placeholder="name" />
                <input type="text" onChange={(e)=>{setData(prev=>({...prev, companyId : e.target.value}))}} placeholder="company" />
<div>
    <button onClick={()=>{onAdd(data),console.log(data)}}>Save</button>
    <button onClick={onClose}>Close</button>
</div>
            </div>


        </div>


    )

}