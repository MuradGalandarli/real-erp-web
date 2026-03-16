
import { useEffect, useState } from "react"
import { getAllDepartmentAsync, getAddDepartmentAsync, updateDepartmentAsync,deleteDepartmentAsync } from "./departmentService"
import { DepartmentTable } from "./DepartmentTable"
import { DepartmentModal } from "./departmentModal";

export function DepartmentPage() {
    const [departments, setDepartments] = useState([]);
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(10)
    const [showModal, setShowModal] = useState(false)
    const [selectDepartment, setSelectDepartment] = useState(null)

    const handleDepartmentGetAll = async () => {
        const datas = await getAllDepartmentAsync(page, size);
        setDepartments(datas.data);
    }
    useEffect(() => {
        handleDepartmentGetAll();
    }, [page, size])


    const handleAddAsync = async (data) => {
        await getAddDepartmentAsync(data);
        setShowModal(false)
        setDepartments(prev => [...prev, data])
    }

    const handleGetByIdDepartment = (id) => {

        setSelectDepartment(departments.find(x => x.id === id))
        setShowModal(true);
    }

    const handleUpdateDepartment = async (department) => {
        await updateDepartmentAsync(department)
        setShowModal(false);
        setSelectDepartment(null)
        setDepartments(prev =>
            prev.map(d => d.id === department.id ? department : d));
    }

    const deleteDepartment = async(id)=>{
    await deleteDepartmentAsync(id);
    setDepartments(prev=>prev.filter(x=>x.id !== id));
    }

    return (
        <div>
            <DepartmentTable departments={departments} getModal={() => { setShowModal(true) }} onUpdate={handleGetByIdDepartment} onDelete={deleteDepartment} />

            {showModal &&
                <DepartmentModal onClose={() => { setShowModal(false) }} onAdd={handleAddAsync} onData={selectDepartment} onUpdate={handleUpdateDepartment} />
            }
        </div>
    )
}


