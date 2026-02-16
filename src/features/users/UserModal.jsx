import { useState } from "react";
import "./user.css"


export function UserModal({onClose,onSave}){
    const[formData,setFormData] = useState([{
        "name" : "",
        "surname": "",
        "email": "",
        "companyId": "",
        "password": ""
    }])


const handleChange = (e)=>{
    setFormData({...formData,
        [e.target.name]:e.target.value
    });
};

const handleSubmit = ()=>{
onSave(formData)
}

return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Add User</h2>
                <input
                name = "name"
                placeholder="name"
                onChange={handleChange}
                />
<input
name = "surname"
placeholder="surname"
onChange={handleChange}
/>

<input
name = "email"
placeholder="email"
onChange={handleChange}
/>

<input
name = "companyId"
placeholder="company"
onChange={handleChange}
/>

<input
name = "password"
placeholder="password"
onChange={handleChange}
/>

<div className="modal-buttons">

<button onClick={handleSubmit}>Save</button>
<button onClick={onClose}>Cancel</button>

</div>
            </div>

        </div>
)
}











