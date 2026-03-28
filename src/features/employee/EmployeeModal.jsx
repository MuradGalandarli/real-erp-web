import { useState } from "react"

export function EmployeeModal({onNewEmployee,onClose}) {
 
    const[newEmployee, setNewEmployee] = useState({
"fullName" : onNewEmployee.name,
"position" : onNewEmployee.position,
"departmentId" : onNewEmployee.departmentId,
"userId" : onNewEmployee.userId,
"companyId" : onNewEmployee.companyId,
    })
 
 return(
 <div className="modal-overlay">
        <div className="modal">
<input type="text" onChange={(e)=>{{setNewEmployee({...newEmployee ,name:e.target.value})}}} placeholder="name" />
<input type="text" onChange={(e)=>{{setNewEmployee({...newEmployee ,position:e.target.value})}}} placeholder="position" />
<input type="text" onChange={(e)=>{{setNewEmployee({...newEmployee ,departmentId:e.target.value})}}} placeholder="department" />
<input type="text" onChange={(e)=>{{setNewEmployee({...newEmployee ,userId:e.target.value})}}} placeholder="user" />
<input type="text" onChange={(e)=>{{setNewEmployee({...newEmployee ,companyId:e.target.value})}}} placeholder="company" />

<div>
    <button onClick={()=>{onNewEmployee(newEmployee)}}>Save</button>
    <button onClick={onClose}>Close</button>
</div>
        </div>
    </div>
 )
}