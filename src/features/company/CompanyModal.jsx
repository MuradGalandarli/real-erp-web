import { useEffect, useState } from "react"

export function CompanyModal({company, onClose}) {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        country: "",
        city: "",
    })

      useEffect(() => {
        if (company) {
            setData({
                id: company.id,
                name: company.name,
                email: company.email,
                phone: company.phone,
                address: company.address,
                country: company.country,
                city: company.city,
            });
        }
    }, [company]);
    


    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Update</h2>
                <input value={data.name} placeholder="name" onChange={(e) => { setData(...data, { name: e.target.value }) }} type="text" />
                <input value={data.email} placeholder="email" onChange={(e) => { setData(...data, { email: e.target.value }) }} type="text" />
                <input value={data.phone} placeholder="phone" onChange={(e) => { setData(...data, { phone: e.target.value }) }} type="text" />
                <input value={data.address} placeholder="address" onChange={(e) => { setData(...data, { address: e.target.value }) }} type="text" />
                <input value={data.country} placeholder="country" onChange={(e) => { setData(...data, { country: e.target.value }) }} type="text" />
                <input value={data.city} placeholder="city" onChange={(e) => { setData(...data, { city: e.target.value }) }} type="text" />

<div className="modal-buttons">
    <button>Save</button>
    <button onClick={onClose}>Close</button>
</div>

            </div>
        </div>
    )
}