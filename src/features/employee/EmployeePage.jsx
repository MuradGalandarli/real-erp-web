import { useEffect, useState } from "react"
import { getAllEmployeesAsync, addEmployeeAsync, updateEmployeeAsync } from "./employeeService"
import { EmployeeTable } from "./EmployeeTable"
import { EmployeeModal } from "./EmployeeModal"
import { getAllDepartmentAsync } from "../department/departmentService"
import { getAllCompanyAsync } from '../company/companyService'

export function EmployeePage() {
    const [employees, setEmployees] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10)
    const [show, setShow] = useState(false);
    const [selectEmployee, setSelectEmployee] = useState(null)
    const [department, setDepartment] = useState([])
    const [company, setCompany] = useState([]);

    const handleCompany = async()=>{

        const datas = await getAllCompanyAsync(page,size);
        setCompany(datas.data.companyDto);

    }

    const handleDepaertment = async() => {
        
        const departments = await getAllDepartmentAsync(page, size)
        setDepartment(departments.data);
    }

    const handleGetAllEmployee = async () => {
        const employees = await getAllEmployeesAsync(page, size);
        setEmployees(employees.data.employees);
    }

    useEffect(
        () => {
            handleGetAllEmployee();
            handleDepaertment();
            handleCompany();
        },
        [ page, size]
    )

    const handleAddEmployee = async (employee) => {
        await addEmployeeAsync(employee);
        setEmployees(prev => [...prev, employee]);
        setShow(false);
    }

    const handleGetByIdEmployee = (id) => {
        const employee = employees.find(e => e.id === id);
        setSelectEmployee(employee);
        setShow(true);
        console.log(selectEmployee)
    }

    const handleUpdateEmployee = async (employee) => {
        await updateEmployeeAsync(employee);
        setEmployees(prev => prev.map(x=>x.id == employee.id ? employee :x))
        setShow(false);
    }

    return (
        <div>
            <EmployeeTable
                onEmployees={employees}
                getModal={() => { setShow(true); }}
                employeeId={handleGetByIdEmployee}
                department={department}
                company = {company}
            />
            {show &&
                <EmployeeModal
                    onNewEmployee={handleAddEmployee}
                    onClose={() => { setShow(false); setSelectEmployee(null) }}
                    getByIdEmployee={selectEmployee}
                    onUpdate={handleUpdateEmployee}
                    department={department}
                    company = {company}
                />
            }
        </div>
    )


}