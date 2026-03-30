import { useEffect, useState } from "react"

export function EmployeeModal({ onNewEmployee, onClose, getByIdEmployee }) {

    const [newEmployee, setNewEmployee] = useState({
        "fullName": onNewEmployee.fullName,
        "position": onNewEmployee.position,
        "departmentId": onNewEmployee.departmentId,
        "userId": onNewEmployee.userId,
        "companyId": onNewEmployee.companyId,
    })


    useEffect(
        () => {
            if (getByIdEmployee) {
                setNewEmployee({
                    id: getByIdEmployee.id,
                    "fullName": getByIdEmployee.fullName,
                    "position": getByIdEmployee.position,
                    "departmentId": getByIdEmployee.departmentId,
                    "userId": getByIdEmployee.userId,
                    "companyId": getByIdEmployee.companyId,
                })

            }
        }
    )

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>{getByIdEmployee ? "Update" : "Add"}</h2>
                <input type="text"
                    onChange={(e) => { { setNewEmployee({ ...newEmployee, fullName: e.target.value }) } }}
                    value={newEmployee.fullName}
                    placeholder="name" />
                <input type="text"
                    onChange={(e) => { { setNewEmployee({ ...newEmployee, position: e.target.value }) } }}
                    value={newEmployee.position}
                    placeholder="position" />
                <input type="text"
                    onChange={(e) => { { setNewEmployee({ ...newEmployee, departmentId: e.target.value }) } }}
                    value={newEmployee.departmentId}
                    placeholder="department" />
                <input type="text"
                    onChange={(e) => { { setNewEmployee({ ...newEmployee, userId: e.target.value }) } }}
                    value={newEmployee.userId}
                    placeholder="user" />
                <input type="text"
                    onChange={(e) => { { setNewEmployee({ ...newEmployee, companyId: e.target.value }) } }}
                    value={newEmployee.companyId}
                    placeholder="company" />

                <div>
                    <button onClick={() => { onNewEmployee(newEmployee) }}>Save</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}