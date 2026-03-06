import { useEffect, useState } from "react"
import { getAllDepartmentAsync, getAddDepartmentAsync } from "./departmentService"
import {DepartmentTable} from "./DepartmentTable"
import { DepartmentModal } from "./departmentModal";

export function DepartmentPage(){
const [departments,setDepartments] = useState([]);
const [page,setPage] = useState(1)
const [size, setSize] = useState(10)
const [showModal, setShowModal ] = useState(false)
const [selectDepartment,setSelectDepartment] = useState(null)

const handleDepartmentGetAll = async()=>{
   const datas = await getAllDepartmentAsync(page,size);
   setDepartments(datas.data);
}
useEffect(()=>{
handleDepartmentGetAll();
},[page,size])


const handleAddAsync = async (data)=>{
    debugger
await getAddDepartmentAsync(data);
setShowModal(false)
setDepartments([...departments, data])
}

const handleGetByIdDepartment = (id)=>{
    debugger;
setSelectDepartment( departments.find(x=>x.id === id))

setShowModal(true);
}

    return (
        <div>
<DepartmentTable departments={departments} getModal={()=>{setShowModal(true)}}   onUpdate={handleGetByIdDepartment}/>

{showModal  &&
<DepartmentModal onClose={()=>{setShowModal(false)}} onAdd={handleAddAsync} onData={selectDepartment}/>
}
</div>
    )
}


