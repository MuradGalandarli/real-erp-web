import { useEffect, useState } from "react"
import { getAllEmployeesAsync } from "./employeeService"
import { EmployeeTable } from "./EmployeeTable"

export function EmployeePage() {
    const [employees, setEmployees] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10)

    const handleGetAllEmployee = async () => {
        const employees = await getAllEmployeesAsync(page,size);
        setEmployees(employees.data.employees);
    }

    useEffect(
        () => {
            handleGetAllEmployee();
        },
        [employees, page, size]
    )
    return (
        <div>
            <EmployeeTable
                onEmployees={employees}
            />
        </div>
    )


}