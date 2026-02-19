import { useState,useEffect } from "react";
import "./user.css"


export function UserModal({onClose,onSave,user,onUpdate}){
  const [formData, setFormData] = useState({
  name: "",
  surname: "",
  email: "",
  companyId: "",
  password: ""
});

useEffect(()=>{
     if(user)
        setFormData({
         "id":user.userId,
         "name" : user.name,
        "surname": user.surname,
        "email": user.email,
        "companyId": user.companyId,
        "password": ""
        })
},[user]
)

const handleChange = (e)=>{
    setFormData({...formData,
        [e.target.name]:e.target.value
    });
};

const handleSubmit = ()=>{
onSave(formData)
}
const handleUpdate = ()=>{
    
    onUpdate(formData)
}

return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>{user ? "Update" : "Add"}</h2>
                <input
                name = "name"
                placeholder="name"
                onChange={handleChange}
                value={formData.name}
                />
<input
name = "surname"
placeholder="surname"
onChange={handleChange}
value={formData.surname}
/>

<input
name = "companyId"
placeholder="company"
onChange={handleChange}
value={formData.companyId}
/>

{!user &&(
<input
name = "password"
placeholder="password"
onChange={handleChange}
/>
,<input
name = "email"
placeholder="email"
onChange={handleChange}
value={formData.email}
/>
)}

<div className="modal-buttons">

<button onClick={user ? handleUpdate : handleSubmit}>Save</button>
<button onClick={onClose}>Cancel</button>

</div>
            </div>

        </div>
)
}











